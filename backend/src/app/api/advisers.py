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


@router.post("/",  response_model=schema.AdministratorCreate)
def create_admin(admin_data: AdministratorCreate, db: Session = Depends(db_session)):
    """
    Crea un asesor en la base de datos del aplicativo
    """
    db = db_session
    try:
        db = db_session()
        # Verificar si el correo electrónico ya existe en la base de datos
        #if is_email_exist(db, Administrador.email):
         #   raise ValueError(f"El correo '{Administrador.email}' ya se encuentra registrado")

        # Crear el administrador utilizando el CRUD
        new_admin = crud.create_admin(db=db, admin_data=admin_data)
        return new_admin
    


    except Exception as e:
        error_msg = f"Error creando el administrador: {str(e)}"
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=error_msg)
    
    finally:
        db.close()