from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

def db_engine():
    """
    Crea la conexión a la base de datos
    """
    pg_dsn = "postgresql://postgres:1234@postgres:5432/AUG"
    return create_engine(pg_dsn)


def db_session():
    """
    Crea la sesión a la base de datos
    """
    engine = db_engine()
    session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    return session()


Base = declarative_base()