"""When the fallback username search last ran for an account.

One nullable column. `of_checked_at` already records that the cheap username
guesses were tried and definitively answered; this records that the expensive
fallback -- the archive sites' own published OnlyFans links, and failing that
a search engine -- was tried as well.

SEPARATE COLUMNS, NOT ONE. Collapsing them makes "guessed and missed"
indistinguishable from "searched and missed", and there is no way to write the
fallback's selection query without that distinction: either it never runs
(every row already stamped) or it circles the same two thousand accounts
forever. NULL here means the fallback has not had its turn.

The downgrade drops it. What is lost is the record of having searched, not any
username -- a username the search found is in `of_username`, confirmed by
onlyfans.com, and the next run would simply search the tail again.

Revision ID: 0004_of_search
"""

import sqlalchemy as sa
from alembic import op


revision = "0004_of_search"
down_revision = "0003_terms"
branch_labels = None
depends_on = None


SCHEMA = "onlyfans"


def upgrade() -> None:
    op.add_column(
        "OnlyFansAccount",
        sa.Column("of_searched_at", sa.DateTime(timezone=True), nullable=True),
        schema=SCHEMA,
    )


def downgrade() -> None:
    op.drop_column("OnlyFansAccount", "of_searched_at", schema=SCHEMA)
