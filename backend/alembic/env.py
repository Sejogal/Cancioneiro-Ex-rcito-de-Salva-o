from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context
import os
import sys
from model import base

# Configuração do Alembic
config = context.config

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = base.metadata

# Adiciona o diretório raiz ao sys.path (deve vir ANTES de carregar dependências locais)
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# --- INÍCIO DA ALTERAÇÃO ---
# 1. Lê a DATABASE_URL do Render. Se não existir, pega do alembic.ini (localhost)
db_url = os.getenv("DATABASE_URL", config.get_main_option("sqlalchemy.url"))

# 2. Corrige o prefixo "postgres://" para "postgresql://" se necessário
if db_url and db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

# 3. Sobrescreve a opção sqlalchemy.url dinamicamente
if db_url:
    config.set_main_option("sqlalchemy.url", db_url)
# --- FIM DA ALTERAÇÃO ---


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