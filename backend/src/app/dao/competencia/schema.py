from pydantic import BaseModel
from humps import camelize

def to_camel(string):
    return camelize(string)

class Competences(BaseModel):
    id_competencia: int
    nombreC: str
    descripcion: str
    id_categoria:int
    id_admin:int

    class Config:
        orm_mode=True
        #alias_generator=to_camel

