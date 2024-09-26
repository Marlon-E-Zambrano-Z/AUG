from sqlalchemy import Column, Integer, String
from ...db import Base 

class Administrador(Base):
    __tablename__ = "administrador"
    id_admin = Column(Integer,primary_key=True, index=True, nullable= False)
    nombres = Column(String, nullable= False)
    email = Column(String, nullable= False)
    contraseña = Column(String, nullable= False)
    permisos = Column(Integer, nullable= False)


