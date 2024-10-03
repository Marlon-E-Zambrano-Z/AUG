from sqlalchemy import Column, Integer, String
from ...db import Base

class Categoria(Base):
    __tablename__ = "categoria"
    id_categoria = Column(Integer,primary_key=True, index=True, nullable= False)
    nombre = Column(String, nullable= False)
    descripcion = Column(String, nullable= False)
    