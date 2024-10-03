from fastapi import APIRouter,HTTPException,status,Depends
from typing import List
from ..dao.asesor.schema import Advisers
from ..db import db_session
from ..dao.asesor.crud import get_all_advisers as leer_asesores

router = APIRouter()

@router.get("/", response_model=List[Advisers])
async def get_all_advisers():
    db=None
    try:
        db=db_session()
        asesores= leer_asesores(db)
        return asesores
    except Exception as e: 
        error=f"Error obteniendo los administradores {e}"
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR)
    finally:
        db.close


