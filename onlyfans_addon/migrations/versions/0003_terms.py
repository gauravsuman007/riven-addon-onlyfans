"""Content terms per performer, for "more like this".

One table. It holds words taken from the titles of the videos the sampling
pass already fetches -- not scraped tags, which live on the video page and
would cost a request each. See `OnlyFansAccountTerm` for why titles are a
usable stand-in on these particular sites.

The downgrade drops it. Nothing else reads it and it is rebuilt by a
background pass, so losing it costs unattended time rather than anything that
has to be crawled again.

Revision ID: 0003_terms
"""

import sqlalchemy as sa
from alembic import op


revision = "0003_terms"
down_revision = "0002_ranking"
branch_labels = None
depends_on = None


SCHEMA = "onlyfans"


def upgrade() -> None:
    op.create_table(
        "OnlyFansAccountTerm",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("account_id", sa.Integer(), nullable=False),
        sa.Column("term", sa.String(), nullable=False),
        # Two columns rather than one, so the rarity scaling is idempotent:
        # `weight` is always recomputed from `count`, never from itself.
        sa.Column("count", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("weight", sa.Float(), nullable=False, server_default="0"),
        sa.ForeignKeyConstraint(
            ["account_id"],
            [f"{SCHEMA}.OnlyFansAccount.id"],
            ondelete="CASCADE",
        ),
        sa.UniqueConstraint("account_id", "term", name="uq_onlyfans_account_term"),
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_term_account_id",
        "OnlyFansAccountTerm",
        ["account_id"],
        schema=SCHEMA,
    )
    op.create_index(
        "ix_onlyfans_term_term",
        "OnlyFansAccountTerm",
        ["term"],
        schema=SCHEMA,
    )
    # The similarity query joins this table to itself on `term` and reads
    # `weight` straight out of the index rather than the heap.
    op.create_index(
        "ix_onlyfans_term_weight",
        "OnlyFansAccountTerm",
        ["term", "weight"],
        schema=SCHEMA,
    )


def downgrade() -> None:
    op.drop_table("OnlyFansAccountTerm", schema=SCHEMA)
