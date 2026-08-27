from logging.config import fileConfig
import os
import sys

from alembic import context
from sqlalchemy import engine_from_config, pool

# Adiciona o diretório raiz ao sys.path para importação do model
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from model import base

# Configuração do Alembic
config = context.config

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = base.metadata

# --- AJUSTE DINÂMICO DA URL DO BANCO ---
db_url = os.getenv("DATABASE_URL", config.get_main_option("sqlalchemy.url"))

if db_url:
    # Garante a substituição para a sintaxe do driver psycopg v3
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql+psycopg://", 1)
    elif db_url.startswith("postgresql://") and not db_url.startswith("postgresql+psycopg://"):
        db_url = db_url.replace("postgresql://", "postgresql+psycopg://", 1)

    config.set_main_option("sqlalchemy.url", db_url)


def run_migrations_offline() -> None:
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()