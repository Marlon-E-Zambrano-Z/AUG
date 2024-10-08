from fastapi import APIRouter,HTTPException, status
from typing import List
from ..dao.categoria.schema import Categories
from ..db import db_session 
from ..dao.categoria.crud import get_all_categories as leer_cat

router = APIRouter()

@router.get("/", response_model=List[Categories])
async def get_all_categories():
    db = None
    try:
        db=db_session()
        Categoria = leer_cat(db)
        return Categoria
    except Exception as e:
        error=f"Error obteniendo las categorias {e}"
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR,detail=error)
    finally:
        db.close()

