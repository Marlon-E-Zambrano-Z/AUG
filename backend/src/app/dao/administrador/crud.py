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





