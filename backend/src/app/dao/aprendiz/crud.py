from sqlalchemy.orm.session import Session
from.model import Aprendiz

def get_all_apprentices(db:Session):
    query=db.query(Aprendiz)
    return query.all()