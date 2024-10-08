from sqlalchemy import Column, Integer, String
from ...db import Base 
from sqlalchemy_utils import EmailType

class Administrador(Base):
    __tablename__ = "administrador"
    id_admin= Column(Integer,primary_key=True, index=True, nullable= False)
    nombres= Column(String, nullable= False)
    email= Column(EmailType, nullable= False, unique = True)
    contraseña= Column(String, nullable= False)
    permisos= Column(String, nullable= False)
