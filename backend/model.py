from sqlalchemy import create_engine, Column, String, Integer, Boolean, Float, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
from dotenv import load_dotenv
import os

load_dotenv()

# Criar conexão com o banco
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://ces:cesadmin@localhost:5432/ces_banco")
engine = create_engine(DATABASE_URL)  # ✅ Adicione esta linha

# Criar base do banco de dados
base = declarative_base()

class notificacoes(base):
    __tablename__ = "notificacoes"

    id = Column(Integer, primary_key=True,  autoincrement=True)  # ✅ Corrigido
    nome = Column(String)
    email = Column(String)
    conteudo = Column(String)
    lida = Column(Boolean, default=False)
    created_at = Column(DateTime, default=func.now())  # ✅ Use DateTime

    def __init__(self, nome, email, conteudo, lida=False):
        self.nome = nome  # ✅ Corrigido (sem vírgula)
        self.email = email  # ✅ Corrigido (sem vírgula)
        self.conteudo = conteudo
        self.lida = lida

class usuario(base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String)
    email = Column(String)
    created_at = Column(DateTime, default=func.now())  # ✅ Adicionei para consistência

    def __init__(self, nome, email):
        self.nome = nome  # ✅ Corrigido (sem vírgula)
        self.email = email  # ✅ Corrigido (sem vírgula)