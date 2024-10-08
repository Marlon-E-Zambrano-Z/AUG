from sqlalchemy.orm.session import Session
from .model import Competencia

def get_all_competences(db:Session):
    query=db.query(Competencia)
    return query.all()