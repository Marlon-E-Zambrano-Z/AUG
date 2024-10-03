from pydantic import BaseModel
from humps import camelize
from decimal import Decimal
from datetime import datetime

def to_camel(string):
    return camelize (string)

class Advisers (BaseModel):
    id_asesor:int
    nombres:str
    email:str
    precio_hora: Decimal
    descripcion:str
    estado:str
    ocupacion:str
    disponibilidad:str
    fecha_registro:datetime
    genero:str
    contraseña:str

    class Config:
        orm_mode=True
        #alias_generator=to_camel

