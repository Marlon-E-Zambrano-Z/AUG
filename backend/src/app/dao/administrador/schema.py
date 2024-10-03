from pydantic import BaseModel, EmailStr
#from humps import camelize
from typing import Optional



def to_camel(string):
    return camelize (string)

class AdministratorCreate(BaseModel):
    id_admin:int
    nombres: str
    email: str
    contraseña: str
    permisos: Optional[str] = "básico"

    class Config:
        orm_mode = True

class Administrators(BaseModel):
    id_admin: int
    nombres: str
    email: str
    contraseña: str
    permisos: int

