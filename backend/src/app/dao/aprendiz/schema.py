from pydantic import BaseModel
from humps import camelize
from datetime import datetime

def to_camel(string):
    return camelize(string)

class Apprentices (BaseModel):
    id_aprendiz:int
    email:str
    descripcion:str
    fechaN:datetime
    contraseña:str
    genero:str
    id_asesor:int
    id_admin:int
    id_categoria:int


    class Config:
        orm_mode=True
        #alias_generator=to_camel
