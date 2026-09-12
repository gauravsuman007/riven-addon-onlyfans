"""Create the add-on's tables, or adopt the ones the host already has.

TWO HISTORIES, ONE HEAD.

A fresh install has nothing and gets the tables created. But this add-on was
extracted from the host, where the same three tables lived in ``public`` with
several thousand rows of real, expensive-to-rebuild data in them: 6,402
performer accounts gathered by walking five sites, and the profile lookups
layered on top. Dropping that on the floor and re-crawling would be hours of
work destroyed to save writing this file.

So the upgrade checks. If the host's tables are still sitting in ``public``,
they are MOVED -- ``ALTER TABLE ... SET SCHEMA``, a catalogue-only operation
that carries every row, index, constraint and sequence across untouched and
costs no rewrite. Otherwise the tables are created empty.

Both paths land on the same schema, so nothing downstream has to know which
one ran.

The downgrade deliberately does NOT move them back. Once this add-on owns
them, ``public`` is not where they belong, and a downgrade that scattered the
add-on's tables into the host's schema would break the one property the whole
design rests on: that ``DROP SCHEMA onlyfans CASCADE`` is a complete
uninstall. Removing the add-on's data is the purge's job, and it is one
statement.

Revision ID: 0001_initial
"""

import sqlalchemy as sa
from alembic import op


revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


SCHEMA = "onlyfans"

#: In dependency order: the source rows carry a foreign key to accounts, so
#: accounts have to arrive first.
TABLES = ("OnlyFansAccount", "OnlyFansAccountSource", "OnlyFansSyncRun")


def _exists(connection, schema: str, table: str) -> bool:
    return bool(
        connection.execute(
            sa.text(
                "SELECT 1 FROM information_schema.tables "
                "WHERE table_schema = :schema AND table_name = :table"
            ),
            {"schema": schema, "table": table},
        ).first()
    )


def upgrade() -> None:
    connection = op.get_bind()

    # The account table is the marker. If the host has it, this is the
    # extraction and everything it references comes with it; if not, this is
    # a fresh install.
    if _exists(connection, "public", "OnlyFansAccount"):
        for table in TABLES:
            if _exists(connection, "public", table) and not _exists(
                connection, SCHEMA, table
            ):
                op.execute(f'ALTER TABLE public."{table}" SET SCHEMA {SCHEMA}')

        return

    # Created from the models rather than transcribed into `op.create_table`
    # calls. An initial migration that restates the schema by hand is a second
    # source of truth that drifts from the first one silently -- and the two
    # only disagree on installs nobody tests, because every existing
    # deployment takes the adoption path above.
    from onlyfans_addon.models import metadata as onlyfans_metadata

    onlyfans_metadata.create_all(bind=connection)


def downgrade() -> None:
    # See the module docstring: the tables are not moved back. This drops what
    # the add-on owns, which is the same thing a purge does and the only
    # answer that keeps the schema a complete description of this add-on.
    from onlyfans_addon.models import metadata as onlyfans_metadata

    onlyfans_metadata.drop_all(bind=op.get_bind())
