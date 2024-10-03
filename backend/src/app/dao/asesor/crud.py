from sqlalchemy.orm.session import Session
from.model import Asesor
from .schema import Advisers
from sqlalchemy.orm import session
from backend.src.app.dao.asesor.model import Asesor


def create_advirser(db: Session, adviser_data: Advisers):
    """Crea un nuevo asesor."""
    asesor = Asesor(
        nombres=adviser_data.nombres,
        email=adviser_data.email,
        contraseña=adviser_data.contraseña,
        precio_hora=adviser_data.precio_hora,
        descripcion=adviser_data.descripcion,
        estado=adviser_data.estado,
        ocupacion=adviser_data.ocupacion,
        disponibilidad=adviser_data.disponibilidad,
        fecha_registro=adviser_data.fecha_registro,
        genero=adviser_data.genero,
    

    )
    db.add(asesor)
    db.commit()
    db.refresh(asesor)  
    return asesor


def get_all_advisers(db:Session):
    query=db.query(Asesor)
    return query.all()