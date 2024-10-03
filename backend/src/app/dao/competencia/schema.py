from pydantic import BaseModel
#from humps import case

def to_camel(string):
    return case(string)

class Competences(BaseModel):
    id_competencia: int
    nombreC: str
    descripcion: str
    id_categoria:int
    id_admin:int

    class Config:
        orm_mode=True
        #alias_generator=to_camel

