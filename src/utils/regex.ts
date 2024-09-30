/*
  El identificador único osea el id no debe contener más de 10 digitos siendo su rango 
  entre 0 - 9.999'999.999
*/
export const id : RegExp = /\d{10}/

/*
El correo electrónico tiene su expresion regular muy legible
El en nombre de usuario acepta mayúsculas, minusculas, numeros, 
carácteres especiales como ._%+-
El arroba que separe al nombre de usuario y al dominio
El dominio se le permite mayúsculas, minusculas, numeros, carácteres 
especiales como .-
*/
export const email : RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

/*
La contraseña se le permite minimamente 8 carácteres, una letra mayúscula, 
una minuscula, un carácter especial entre estos @$!%*?& y un número
*/
export const password : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
