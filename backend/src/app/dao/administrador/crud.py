from sqlalchemy.orm.session import Session
from .model import Administrador  # Modelo del administrador
from sqlalchemy.orm import Session
from backend.src.app.dao.administrador.model import Administrador
from .schema import Administrators





def create_admin(db: Session, admin_data: Administrators):
    """Crea un nuevo administrador."""
    administrador = Administrador(
        nombres=admin_data.nombres,
        email=admin_data.email,
        contraseña=admin_data.contraseña,
        permisos=admin_data.permisos
    )
    db.add(administrador)
    db.commit()
    db.refresh(administrador)  
    return administrador



def get_all_administrators(db:Session):
    query=db.query(Administrador)
    return query.all()


def update_administrator(db: Session, admin_id: int, admin_data: Administrators):
    # Busca el administrador por ID
    admin = db.query(Administrador).filter(Administrador.id_admin == admin_id).first()
    
    if admin is None:
        return None  # O puedes lanzar una excepción si prefieres
    
    # Actualiza los campos si se proporcionan
    if admin_data.nombres is not None:
        admin.nombres = admin_data.nombres
    if admin_data.email is not None:
        admin.email = admin_data.email
    if admin_data.contraseña is not None:
        admin.contraseña = admin_data.contraseña
    if admin_data.permisos is not None:
        admin.permisos = admin_data.permisos
    
    # Guarda los cambios en la base de datos
    db.commit()
    db.refresh(admin)
    
    return admin


