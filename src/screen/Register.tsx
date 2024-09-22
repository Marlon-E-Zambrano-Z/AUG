import {
  Button,
  Col,
  Input,
  Row,
  Select 
} from 'antd'
import { useState } from 'react'
/*
Depende de una lista desplegable el usuario elige su rol
y partiendo de esto se le piden ciertos datos

PARA ASESOR
nombres
correo
presentacion
No lo hace el se define estado activo
ocupacion (docente, empresario ...)
CAtegorias cbx cada categoria

PARA Aprendiz

*/

export default function Register (){
  
  const [isLeaner, setIsLearner] = useState(false);
  
  const handlerRenderUserForm  = (value : string)  => setIsLearner( value === "aprendiz" ? true : false);

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <Select
        autoFocus 
        allowClear
        placeholder="Selecciona el rol"
        options={[
          {value:"aprendiz",label:"Aprendiz"},
          {value:"asesor",label:"Asesor"}
          ]}
        onChange={e => handlerRenderUserForm(e.target.value)}/>
        <Input 
        placeholder='Ingrese su nombre'
        size='large'
        variant='borderless'
        maxLength={50}
        />
        <Input
        placeholder='Ingrese su correo electronico'
        size='large'
        variant='borderless'
        maxLength={50}
        />
        {!isLeaner ? <Input.TextArea 
        placeholder='Ingrese su presentación, ¿Donde estudio?, ¿Donde ha trabajado?, ¿Cuantos años tiene de experiencia?' 
        size='large'
        variant='borderless'
        maxLength={150}/> : null
        }
        {!isLeaner ? <Input
        placeholder='Ingrese su ocupación'
        size='large'
        variant='borderless'
        maxLength={50}
        /> : null
        }
        {!isLeaner ? <Select
        allowClear
        placeholder="Selecciona la categoria"
        options={[
          {value:"comunicacion",label:"Comunicación"},
          {value:"artes",label:"Artes"}
          ]}
        /> : null
        }
        <Button>Registrarme</Button>
      </Col>
      <Col span={4}></Col>
    </Row>
  )
}