from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from .api import competences, ping, administrators, categories, advisers, apprentices


app= FastAPI (title='AUG', docs_url= "/dev-docs")

app.include_router(ping.router, tags=["Conexion"], prefix="/api/v1/conexion")
app.include_router(administrators.router, tags=["Administradores"], prefix="/api/v1/administrators")
app.include_router(categories.router, tags=["Categorias"], prefix="/api/v1/categories")
app.include_router(advisers.router, tags=["Asesores"], prefix="/api/v1/advisers")
app.include_router(competences.router, tags=["Competencias"], prefix="/api/v1/competences")
app.include_router(apprentices.router, tags=["Aprendices"], prefix="/api/v1/apprentices")
