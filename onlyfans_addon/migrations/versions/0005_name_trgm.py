"""Trigram indexes on the account index's name and handle, for fuzzy search

`GET /api/v1/x/onlyfans/accounts?search=` stopped being a substring test and
became a fuzzy match (`program.utils.fuzzy`), so it now asks Postgres for
`word_similarity(..., lower(display_name))` and for `handle LIKE '%...%'`.
Neither can use a btree. These indexes are what keep that affordable across an
index that runs to tens of thousands of rows.

TWO TRAPS, both found by breaking this once:

1. **`public.gin_trgm_ops`, fully qualified.** The host runs an add-on's
   migrations with `search_path` set to the add-on's OWN schema, so that a
   migration written without an explicit `schema=` still lands in the right
   place. The operator class lives in `public`, and under that search_path an
   unqualified `gin_trgm_ops` fails with *operator class "gin_trgm_ops" does
   not exist for access method "gin"*.

2. **An add-on's migrations run in a TRANSACTION**, unlike the host's, which
   `env.py` runs under isolation_level="AUTOCOMMIT". So the host's pattern --
   try/except around each optional statement and carry on -- is actively
   WRONG here: the first failure poisons the transaction, every later
   statement dies with `InFailedSqlTransaction` including alembic's own
   version bump, the migration fails, and **the whole add-on fails to load**.
   Nothing about the search is worth that.

So this checks whether the extension is usable and does nothing at all if it
is not, rather than trying and catching. Creating the extension is left to the
host, which does it in `public`: doing it here under the add-on's search_path
would install a second copy into the add-on's schema.

Performance only. Verify after deploying:

    SELECT indexname FROM pg_indexes WHERE schemaname = 'onlyfans';

Revision ID: 0005_name_trgm
"""

import sqlalchemy as sa
from alembic import op


revision = "0005_name_trgm"
down_revision = "0004_of_search"
branch_labels = None
depends_on = None


SCHEMA = "onlyfans"

_INDEXES = (
    (
        "ix_onlyfans_account_display_name_trgm",
        "lower(display_name) public.gin_trgm_ops",
    ),
    # The handle is already the collapsed spelling, and the collapsed half of
    # the search is a LIKE '%...%' on it -- which no btree can serve either.
    ("ix_onlyfans_account_handle_trgm", "handle public.gin_trgm_ops"),
)


def _available(connection) -> bool:
    """Is pg_trgm installed, and its operator class reachable from here?

    Asked rather than attempted: see the second trap above. A `SELECT` that
    answers false costs nothing, where a `CREATE INDEX` that raises costs the
    add-on its entire startup.
    """

    return bool(
        connection.execute(
            sa.text(
                "SELECT 1 FROM pg_opclass o "
                "JOIN pg_am a ON a.oid = o.opcmethod "
                "JOIN pg_namespace n ON n.oid = o.opcnamespace "
                "WHERE o.opcname = 'gin_trgm_ops' "
                "AND a.amname = 'gin' AND n.nspname = 'public'"
            )
        ).first()
    )


def upgrade() -> None:
    connection = op.get_bind()

    if connection.dialect.name != "postgresql" or not _available(connection):
        return

    for name, expression in _INDEXES:
        connection.execute(
            sa.text(
                f"CREATE INDEX IF NOT EXISTS {name} "
                f'ON {SCHEMA}."OnlyFansAccount" USING gin ({expression})'
            )
        )


def downgrade() -> None:
    connection = op.get_bind()

    if connection.dialect.name != "postgresql":
        return

    for name, _ in _INDEXES:
        connection.execute(sa.text(f"DROP INDEX IF EXISTS {SCHEMA}.{name}"))
