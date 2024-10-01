from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from .api import (
    ping
)

app= FastAPI (title='AUG', docs_url= "/dev-docs")

app.include_router(ping.router, tags=["Conexion"], prefix="/api/v1/conexion")