"""Ranking: sampled view counts, scores, and the stats time series.

Everything the recommendation rails need that the index did not already have.

Three parts, and only the third is interesting. The scores on
``OnlyFansAccount`` and the sampled counts on ``OnlyFansAccountSource`` are
plain nullable columns -- nullable rather than zero-defaulted because "not
measured yet" and "measured, and it is nothing" order differently and the
rails filter on exactly that difference.

``OnlyFansAccountStat`` is the new table, and it is the only one here that is
a time series. Trending cannot be scraped from anywhere: the sites report a
level, and a derivative needs a yesterday to subtract. This is the yesterday.

The downgrade drops all of it. Nothing else reads these columns, and the data
is rebuilt by a background pass rather than by a crawl, so losing it costs
hours of unattended work rather than anything irreplaceable.

Revision ID: 0002_ranking
"""

import sqlalchemy as sa
from alembic import op


revision = "0002_ranking"
down_revision = "0001_initial"
branch_labels = None
depends_on = None


SCHEMA = "onlyfans"


def upgrade() -> None:
    op.add_column(
        "OnlyFansAccount",
        sa.Column("popularity_score", sa.Float(), nullable=True),
        schema=SCHEMA,
    )
    op.add_column(
        "OnlyFansAccount",
        sa.Column("trending_score", sa.Float(), nullable=True),
        schema=SCHEMA,
    )
    op.add_column(
        "OnlyFansAccount",
        sa.Column("stats_checked_at", sa.DateTime(timezone=True), nullable=True),
        schema=SCHEMA,
    )
    # Each rail is an ORDER BY one of these over the whole index, so both are
    # indexed. Postgres skips NULLs in a b-tree scan only when the query says
    # so, which is why the rails say `IS NOT NULL` explicitly.
    op.create_index(
        "ix_onlyfans_account_popularity",
        "OnlyFansAccount",
        ["popularity_score"],
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_account_trending",
        "OnlyFansAccount",
        ["trending_score"],
        schema=SCHEMA,
    )

    op.add_column(
        "OnlyFansAccountSource",
        sa.Column("recent_views", sa.Integer(), nullable=True),
        schema=SCHEMA,
    )
    op.add_column(
        "OnlyFansAccountSource",
        sa.Column("sampled_videos", sa.Integer(), nullable=True),
        schema=SCHEMA,
    )

    op.create_table(
        "OnlyFansAccountStat",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("account_id", sa.Integer(), nullable=False),
        sa.Column("site", sa.String(), nullable=False),
        sa.Column("captured_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("recent_views", sa.Integer(), nullable=True),
        sa.Column("sampled_videos", sa.Integer(), nullable=True),
        sa.Column("video_count", sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(
            ["account_id"],
            [f"{SCHEMA}.OnlyFansAccount.id"],
            ondelete="CASCADE",
        ),
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_stat_account_id",
        "OnlyFansAccountStat",
        ["account_id"],
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_stat_site",
        "OnlyFansAccountStat",
        ["site"],
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_stat_captured_at",
        "OnlyFansAccountStat",
        ["captured_at"],
        schema=SCHEMA,
    )
    # The lookup `rescore` makes per account per site: the snapshot nearest to
    # a week ago. Without this it is a sequential scan of the whole series,
    # which grows by (accounts x sites) every pass.
    op.create_index(
        "ix_onlyfans_stat_account_site_time",
        "OnlyFansAccountStat",
        ["account_id", "site", "captured_at"],
        schema=SCHEMA,
    )


def downgrade() -> None:
    op.drop_table("OnlyFansAccountStat", schema=SCHEMA)
    op.drop_column("OnlyFansAccountSource", "sampled_videos", schema=SCHEMA)
    op.drop_column("OnlyFansAccountSource", "recent_views", schema=SCHEMA)
    op.drop_index(
        "ix_onlyfans_account_trending", table_name="OnlyFansAccount", schema=SCHEMA
    )
    op.drop_index(
        "ix_onlyfans_account_popularity", table_name="OnlyFansAccount", schema=SCHEMA
    )
    op.drop_column("OnlyFansAccount", "stats_checked_at", schema=SCHEMA)
    op.drop_column("OnlyFansAccount", "trending_score", schema=SCHEMA)
    op.drop_column("OnlyFansAccount", "popularity_score", schema=SCHEMA)
