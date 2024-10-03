## PRUEBA DE CONEXION##
from fastapi import APIRouter
from fastapi.param_functions import Depends

router = APIRouter()

@router.get("/")
async def ping():
    return {"ping":True}
