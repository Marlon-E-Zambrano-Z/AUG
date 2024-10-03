from sqlalchemy.orm.session import Session
from .model import Categoria

def get_all_categories(db:Session):
    query=db.query(Categoria)
    return query.all()