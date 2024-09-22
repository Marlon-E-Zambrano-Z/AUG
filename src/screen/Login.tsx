import {
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  Flex, 
  Input,
  Row
  } from "antd"

import { 
  BLUE_LIGHT, 
  RED_LIGHT, 
  TRANSPARENT,
  WHITE_LIGHT, 
  WHITE_TRANSPARENT, 
  } from "../css/Colors.ts"

import * as global from "../utils/Body.ts"

import { FaUserCircle as SignInIcon } from "react-icons/fa"

import { useEffect, useState } from "react"

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

  const [idEmail, setIdEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);


  // const handlerSignIn = () => {
  //   if(!rememberMe){
      
  //   }
  // }

  return (
    <ConfigProvider
    theme={{
      components : {
        Input : {
          colorTextPlaceholder : WHITE_TRANSPARENT,
          colorText : WHITE_LIGHT,
          colorIcon : WHITE_TRANSPARENT,
          colorIconHover : WHITE_LIGHT
        },
        Checkbox : {
          colorText : WHITE_LIGHT
        },
        Button : {
          defaultBg : TRANSPARENT,
          colorText : WHITE_LIGHT,
          defaultGhostBorderColor : TRANSPARENT,
          defaultGhostColor : TRANSPARENT,
          defaultHoverBorderColor : BLUE_LIGHT,
          defaultHoverColor : BLUE_LIGHT
        }
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
          onChange={ event => setIdEmail(event.target.value) }
            size="large"
            variant="borderless"
            placeholder="contraseña" />
          <Checkbox checked={rememberMe}>Recuerdame</Checkbox>
          <Button 
            type="link" 
            href="#">
            ¿ olvidaste tu contraseña ?
          </Button>
          <Flex
          justify="space-around"
          align="center"
          gap="large">
            <Button>Inicia sesion</Button>
            <Button>Registrate</Button>
          </Flex>
        </Flex>
      </Col>      
      <Col span={6}/>
    </Row>
    </ConfigProvider>
  )
}
