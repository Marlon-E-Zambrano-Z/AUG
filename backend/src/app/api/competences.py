from fastapi import APIRouter,HTTPException, status
from typing import List
from ..dao.competencia.schema import Competences
from ..db import db_session 
from ..dao.competencia.crud import get_all_competences as leer_comp


router = APIRouter()

##Get
@router.get("/", response_model=List[Competences])
async def get_all_competence():
    db = None
    try:
        db=db_session()
        competencias = leer_comp(db)
        return competencias
    except Exception as e:
        error=f"Error obteniendo las categorias {e}"
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR,detail=error)
    finally:
        db.close()