from sqlalchemy import Column,Integer,String,DateTime
from ...db import Base

class Asesor (Base):
    __tablename__ ="asesor"
    id_asesor=Column(Integer,primary_key=True, index=True, nullable= False)
    nombres=Column(String, nullable= False)
    email=Column(String, nullable= False)
    precio_hora=Column(String, nullable= False)
    descripcion=Column(String, nullable= False)
    estado=Column(String, nullable= False)
    ocupacion=Column(String, nullable= False)
    disponibilidad=Column(String, nullable= False)
    fecha_registro=Column(DateTime, nullable= False)
    genero=Column(String, nullable= False)
    contraseña=Column(String, nullable= False)