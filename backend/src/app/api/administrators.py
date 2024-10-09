from fastapi import APIRouter, HTTPException, status,Depends
from typing import List
from sqlalchemy.orm import Session
from backend.src.app.dao.administrador.model import Administrador
from ..dao.administrador.schema import AdministratorCreate,Administrators,AdministratorUpdate
from ..db import db_session
from ..dao.administrador.crud import get_all_administrators as leer_admin
from backend.src.app.dao.administrador.crud import create_admin
from backend.src.app.db import db_session
from ..dao.administrador import crud, schema


router = APIRouter()

#####  G E T  ###################

@router.get("/", response_model=List[Administrators])
async def get_all_administrators():
    db = None
    try:
        db = db_session()
        administradores = leer_admin(db)
        return administradores
    except Exception as e:
        error = f"Error obteniendo los administradores: {e}"
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=error)
    finally:
        if db:
            db.close()

###### P O S T #################
@router.post("/",  response_model=schema.AdministratorCreate)
def create_admin(admin_data: AdministratorCreate, db: Session = Depends(db_session)):

    """
    Crea un administrador en la base de datos del 
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


##### p u t #####################
@router.put("/", response_model=Administrators)
def update_admin(admin_id: int, admin_data: AdministratorUpdate):
    db = db_session()
    try:
        # Busca el administrador por ID
        admin = db.query(Administrador).filter(Administrador.id_admin == admin_id).first()
        
        if not admin:
            raise HTTPException(status_code=404, detail="Administrador no encontrado")
        
        # Actualiza los datos
        if admin_data.nombres is not None:
            admin.nombres = admin_data.nombres
        if admin_data.email is not None:
            admin.email = admin_data.email
        if admin_data.contraseña is not None:
            admin.contraseña = admin_data.contraseña
        if admin_data.permisos is not None:
            admin.permisos = admin_data.permisos
        
        
        db.commit()#Guarda la modificacion
        db.refresh(admin)#Actualiza la bd 
        
        return admin
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error actualizando el administrador: {e}")
    finally:
        db.close()
