from sqlalchemy import Column,Integer,String,DateTime
from ...db import Base

class Aprendiz (Base):
    __tablename__ ="aprendiz"
    id_aprendiz=Column(Integer,primary_key=True, index=True, nullable= False)
    nombres=Column(String, nullable= False)
    email=Column(String, nullable= False)
    descripcion=Column(String, nullable= False)
    fechaN=Column(DateTime, nullable= False)
    genero=Column(String, nullable= False)
    contraseña=Column(String, nullable= False)
    id_asesor=Column(Integer, nullable= False)
    id_admin=Column(Integer, nullable= False)
    id_categoria=Column(Integer, nullable= False)