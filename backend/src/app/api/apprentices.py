from fastapi import APIRouter,HTTPException,status
from typing import List
from ..dao.aprendiz.schema import Apprentices
from ..db import db_session
from ..dao.aprendiz.crud import get_all_apprentices as leer_apre

router = APIRouter()

@router.get("/", response_model=List[Apprentices])
async def get_all_apprentices():
    db=None
    try:
        db=db_session()
        aprendices= leer_apre(db)
        return aprendices
    
    except Exception as e: 
         error=f"Error obteniendo los aprendices {e}"
         raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR)
    finally:
        db.close
