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
interface CredentialsResponse {
  status: boolean;
  typeUser?: string;
  error?: string | null; // Se permite que el error sea un string o null
}

export const sendCredentials = async (idEmail: string, password: string): Promise<CredentialsResponse> => {
  try {
    const SALT = bcrypt.genSaltSync(10); 
    const HASHED_PASSWD: string = bcrypt.hashSync(password, SALT);
    
    // Realiza la solicitud POST y espera la respuesta
    const response = await axios.post("/auth", {
      idEmail,
      password: HASHED_PASSWD,
    });

    // Si todo va bien, devuelve la respuesta esperada
    return {
      status: response.data.status,
      typeUser: response.data.typeUser,
      error: null, // No hay error
    };
  } catch (error) {
    // Primero, verifica si es un error de Axios
    if (axios.isAxiosError(error)) {
      // Aquí sabes que es un error de Axios, y puedes acceder a 'response' y 'message'
      return {
        status: false,
        error: error.response?.data?.message || error.message || "Error desconocido",
      };
    } else {
      // Si no es un error de Axios, maneja el error genérico
      return {
        status: false,
        error: "Error inesperado", // Mensaje genérico si no es un error de Axios
      };
    }
  }
};
