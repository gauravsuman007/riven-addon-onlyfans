"""Trigram index on the account index's display name, for fuzzy search

`GET /api/v1/x/onlyfans/accounts?search=` stopped being a substring test and
became a fuzzy match (`program.utils.fuzzy`), so it now asks Postgres for
`word_similarity(..., lower(display_name))`. This index is what keeps that
affordable across an index that runs to tens of thousands of rows, rather than
the ~1,200 of the studio directory where the scan is free either way.

It is a PERFORMANCE property only. The search is correct without it, which is
why every statement is `IF NOT EXISTS` and a failure is swallowed -- a
database that cannot create this is slower, not broken.

The host runs migrations under isolation_level="AUTOCOMMIT", where a
SAVEPOINT is invalid and raises before the statement is sent. A plain
try/except per statement is both necessary and sufficient; do not reach for
`begin_nested()` here. See the host's AGENTS.md, where that cost a deploy.

Verify after deploying, because a swallowed failure looks exactly like
success:

    SELECT indexname FROM pg_indexes WHERE indexname LIKE '%trgm%';

Revision ID: 0005_name_trgm
"""

import sqlalchemy as sa
from alembic import op


revision = "0005_name_trgm"
down_revision = "0004_of_search"
branch_labels = None
depends_on = None


SCHEMA = "onlyfans"

_STATEMENTS = (
    "CREATE EXTENSION IF NOT EXISTS pg_trgm",
    "CREATE INDEX IF NOT EXISTS ix_onlyfans_account_display_name_trgm "
    f'ON {SCHEMA}."OnlyFansAccount" '
    "USING gin (lower(display_name) gin_trgm_ops)",
    # The handle is already the collapsed spelling, and the collapsed half of
    # the search is a LIKE '%...%' on it -- which no btree can serve either.
    "CREATE INDEX IF NOT EXISTS ix_onlyfans_account_handle_trgm "
    f'ON {SCHEMA}."OnlyFansAccount" USING gin (handle gin_trgm_ops)',
)


def upgrade() -> None:
    connection = op.get_bind()

    if connection.dialect.name != "postgresql":
        return

    for statement in _STATEMENTS:
        try:
            connection.execute(sa.text(statement))
        except Exception:  # noqa: BLE001
            continue


def downgrade() -> None:
    connection = op.get_bind()

    if connection.dialect.name != "postgresql":
        return

    for name in (
        "ix_onlyfans_account_display_name_trgm",
        "ix_onlyfans_account_handle_trgm",
    ):
        connection.execute(sa.text(f"DROP INDEX IF EXISTS {SCHEMA}.{name}"))
