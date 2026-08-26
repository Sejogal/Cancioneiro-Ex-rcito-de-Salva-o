from model import engine  # ✅ Importe engine, não db
from sqlalchemy.orm import sessionmaker

def criarSessao():
    try:
        Session = sessionmaker(bind=engine)
        Sessao = Session()
        yield Sessao
    finally:
        Sessao.close()