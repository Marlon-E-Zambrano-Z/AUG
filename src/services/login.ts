import axios from "axios"
import bcrypt from "bcryptjs"
/*
Entradas: 
  - idEMail: Puede ingresar un id o un correo electrónico
  - password: Puede ingresar una contraseña que debe cumplir minimamente 
    con
    8 carácteres, 
    una letra mayúscula, 
    una minuscula, 
    un carácter especial entre estos @$!%*?&
    un número

Salidas
  - Un objeto con dos propiedades
    * error: por ahora no se ha definido sí será un objeto o un mensaje como string
      así siendo un objeto almacenará la información por defecto que proporciona javascript a un objeto,
      de lo contrario sí es un mensaje este sería un string
    * status: un booleano que define sí la respuesta tuvo problemas o no, su valor depende de ello
*/
export const sendCredentials = async (idEmail : string, password: string) => {
  try{
  const SALT = bcrypt.genSaltSync(10) 
  const HASHED_PASSWD : string = bcrypt.hashSync(password, SALT)
  
  await axios.post("/api",{
    idEmail,
    password : HASHED_PASSWD
  })
  }catch (error){
    return {
      error : error, 
      status: false
    }
  }
  return {
    error: null,
    status: true
  }
}