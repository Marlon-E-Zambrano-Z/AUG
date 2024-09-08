import {
  Button,
  Col,
  Checkbox,
  Flex, 
  Input,
  Row } from "antd"
import { FaUserCircle as SignInIcon } from "react-icons/fa"
import { inputStyleLogin as inputStyle } from "../css/Login.ts"

import { useEffect } from "react"

function Login() {
  /*
  Esta vista se hace con el objeto de que el usuario 
  inicie sesion o se registre, ademas de que puede 
  recuperar contraseña o tenerla guardada con la opcion
  de recordar contraseña
   */
  useEffect(() => {
    document.body.style.background = "linear-gradient(to bottom right, #f00, #00f)"
    document.body.style.minHeight = "100vh"
  }, [])
  
  return (
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
          />
          <Input
            placeholder="Id o Correo"
            maxLength={50}
            size="large"
            style={inputStyle}
            variant="borderless" />
          <Input.Password
            size="large"
            variant="borderless"
            style={inputStyle}
            placeholder="contraseña" />
          <Checkbox>Recuerdame</Checkbox>
          <a href="#">¿ olvidaste tu contraseña ?</a>
          <Flex
          justify="space-around"
          align="center"
          gap="large">
            <Button type="primary">Iniciar sesion</Button>
            <Button type="primary">Registrarse</Button>
          </Flex>
        </Flex>
      </Col>      
      <Col span={6}/>
    </Row>
  )
}

export default Login;