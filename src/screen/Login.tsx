import { 
  Col,
  Checkbox,
  Flex, 
  Input,
  Row } from "antd"

function Login() {

  const gradient : React.CSSProperties = {backgroundColor:"linear-gradient(to bottom right, #f00, #00f)"}
  const flexByButtons : React.CSSProperties = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    gap:"medium"
  }
  
  return (
    <Row 
    gutter={8} 
    style={gradient}>
      <Col span={8}/>
      <Col span={8}>
        <Flex
        vertical={true}
        justify="space-around"
        align="center"
        gap={40}>
          <Input
            placeholder="Id o Correo"
            maxLength={30}
            size="middle"
            variant="outlined" />
          <Input.Password
            placeholder="contraseña"
          />
          <Checkbox>Recuerdame</Checkbox>
          <a href="#">¿ olvidaste tu contraseña ?</a>
          <section style={flexByButtons}>

          </section>
        </Flex>
      </Col>      
      <Col span={8}/>
    </Row>
  )
}

export default Login;