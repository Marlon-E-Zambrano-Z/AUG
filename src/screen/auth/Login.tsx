import {
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  Flex, 
  Input,
  Row
  } from "antd"

import { useNavigate } from "react-router-dom"

import {textfield, checkbox, button} from '../../css/config_provider.ts'

import { RED_LIGHT, BLUE_LIGHT, WHITE_LIGHT } from "../../css/Colors.ts"

import * as global from "../../utils/Body.ts"

import { FaUserCircle as SignInIcon } from "react-icons/fa"

import { useEffect, useState } from "react"
import { sendCredentials } from "../../services/login.ts"

//Axios para hacer peticiones para conectar la logica del fronted con backend

export default function Login() {
  /*
  Esta vista se hace con el objeto de que el usuario 
  inicie sesion o se registre, ademas de que puede 
  recuperar contraseña o tenerla guardada con la opcion
  de recordar contraseña
   */

  useEffect(() => {
    /*
    Se agregan propiedades que son globales pero son 
    necesarias para una visualizacion correcta
    */
    global.setBackgroundGradientDiagonal(RED_LIGHT,BLUE_LIGHT)
    global.setMinHeight("100vh")
  }, [])

  const navigate = useNavigate();
  const [idEmail, setIdEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);


  const handlerSignIn = async () => {
    if(rememberMe){
      localStorage.setItem('userEmail', idEmail);
    localStorage.setItem('userPassword', password);  // Idealmente, deberías guardar un hash en lugar de la contraseña en texto plano

    const response = await sendCredentials(idEmail, password);

    if (response.status) {
      navigate('/match');
    }
  }else{
    const response = await sendCredentials(idEmail, password)
    if(response.status){
      navigate('/match')
    }
    }
  }
  
  const handlerRememberMe = () => setRememberMe(!rememberMe)

  return (
    <ConfigProvider
    theme={{
      components : {
        Input : textfield,
        Checkbox : checkbox,
        Button : button
      },
    }}
    >
    <Row gutter={8}>
      <Col span={6}/>
      <Col span={12}>
        <Flex
        vertical={true}
        justify="space-evenly"
        align="center"        
        gap="large">
          <SignInIcon
          size={100}
          fill={WHITE_LIGHT}
          />
          <Input
            onChange={ event => setIdEmail(event.target.value) }
            autoFocus
            placeholder="Id o Correo"
            maxLength={50}
            size="large"
            variant="borderless" />
          <Input.Password
          onChange={ event => setPassword(event.target.value) }
            size="large"
            variant="borderless"
            placeholder="contraseña" />
          <Checkbox 
          checked={rememberMe}
          onChange={() => handlerRememberMe}>Recuerdame</Checkbox>
          <Button 
            type="link" 
            href="#">
            ¿ olvidaste tu contraseña ?
          </Button>
          <Flex
          justify="space-around"
          align="center"
          gap="large">
            <Button onClick={() => handlerSignIn}>Inicia sesion</Button>
            <Button>Registrate</Button>
          </Flex>
        </Flex>
      </Col>      
      <Col span={6}/>
    </Row>
    </ConfigProvider>
  )
}
