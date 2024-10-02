from sqlalchemy import Column, Integer, String
from ...db import Base 

class Competencia(Base):
    __tablename__ = "competencia"
    id_competencia= Column(Integer,primary_key=True, index=True, nullable= False)
    nombreC = Column(String, nullable= False)
    descripcion = Column(String, nullable= False)
    id_categoria= Column(Integer, nullable= False)
    id_admin= Column(Integer, nullable= False)
   


