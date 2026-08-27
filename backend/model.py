import os
from dotenv import load_dotenv
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    String,
    create_engine,
)
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func

load_dotenv()

# Criar conexão com o banco
DATABASE_URL = os.getenv(
    "DATABASE_URL", "postgresql://ces:cesadmin@localhost:5432/ces_banco"
)

# Garante o uso do driver psycopg v3 no Render e localmente
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+psycopg://", 1)
elif DATABASE_URL.startswith("postgresql://") and not DATABASE_URL.startswith("postgresql+psycopg://"):
    DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+psycopg://", 1)

engine = create_engine(DATABASE_URL)

# Criar base do banco de dados
base = declarative_base()


class notificacoes(base):
    __tablename__ = "notificacoes"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String)
    email = Column(String)
    conteudo = Column(String)
    lida = Column(Boolean, default=False)
    created_at = Column(DateTime, default=func.now())

    def __init__(self, nome, email, conteudo, lida=False):
        self.nome = nome
        self.email = email
        self.conteudo = conteudo
        self.lida = lida


class usuario(base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String)
    email = Column(String)
    created_at = Column(DateTime, default=func.now())

    def __init__(self, nome, email):
        self.nome = nome
        self.email = email