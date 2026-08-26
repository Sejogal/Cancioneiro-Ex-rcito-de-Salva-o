from fastapi import FastAPI
from routes import router, usuario_router, feedbackRouter  # ✅ Adicione feedbackRouter

app = FastAPI()

app.include_router(router)
app.include_router(usuario_router)
app.include_router(feedbackRouter) 