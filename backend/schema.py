from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional


class usuarioSchema(BaseModel):
    id: Optional[int] = None
    nome: str
    corpo: str
    email: str
    
    model_config = ConfigDict(from_attributes=True)

# Se tiver outros schemas, faça o mesmo para todos
class notificacaoSchema(BaseModel):
    id: Optional[int] = None
    usuario_id: int
    mensagem: str
    lida: Optional[bool] = False
    created_at: Optional[datetime] = None
    
    model_config = ConfigDict(from_attributes=True)

class feedbackSchema(BaseModel):
    nome: Optional[str] = None  
    email: Optional[str] = None
    mensagem: str
    
    model_config = ConfigDict(from_attributes=True)
