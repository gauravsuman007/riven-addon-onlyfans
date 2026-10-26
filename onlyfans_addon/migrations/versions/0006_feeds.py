"""Stored merged feeds, and when each account was last opened.

`OnlyFansFeed` holds one row per account whose feed has been built: the whole
merged state as JSON (see `onlyfans_addon/feed.py`). `viewed_at` is one of the
signals that picks which feeds the background job keeps warm.

The downgrade drops both. Nothing is lost that a page view would not rebuild.

Revision ID: 0006_feeds
"""

import sqlalchemy as sa
from alembic import op


revision = "0006_feeds"
down_revision = "0005_name_trgm"
branch_labels = None
depends_on = None


SCHEMA = "onlyfans"


def upgrade() -> None:
    op.add_column(
        "OnlyFansAccount",
        sa.Column("viewed_at", sa.DateTime(timezone=True), nullable=True),
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_OnlyFansAccount_viewed_at",
        "OnlyFansAccount",
        ["viewed_at"],
        schema=SCHEMA,
    )
    op.create_table(
        "OnlyFansFeed",
        sa.Column(
            "account_id",
            sa.Integer(),
            sa.ForeignKey(f"{SCHEMA}.OnlyFansAccount.id", ondelete="CASCADE"),
            primary_key=True,
        ),
        sa.Column("state", sa.JSON(), nullable=False),
        sa.Column("entries", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("complete", sa.Boolean(), nullable=False, server_default="false"),
        sa.Column("built_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("saved_at", sa.DateTime(timezone=True), nullable=False),
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_OnlyFansFeed_built_at", "OnlyFansFeed", ["built_at"], schema=SCHEMA
    )


def downgrade() -> None:
    op.drop_index("ix_onlyfans_OnlyFansFeed_built_at", table_name="OnlyFansFeed", schema=SCHEMA)
    op.drop_table("OnlyFansFeed", schema=SCHEMA)
    op.drop_index("ix_onlyfans_OnlyFansAccount_viewed_at", table_name="OnlyFansAccount", schema=SCHEMA)
    op.drop_column("OnlyFansAccount", "viewed_at", schema=SCHEMA)
