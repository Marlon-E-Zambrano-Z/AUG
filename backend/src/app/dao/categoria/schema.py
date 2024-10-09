from pydantic import BaseModel
#from humps import camelize

def to_camel(string):
    return camelize(string)

class Categories(BaseModel):
    id_categoria: int
    nombre: str
    descripcion: str
    

    class Config:
        orm_mode=True
        #alias_generator=to_camel
