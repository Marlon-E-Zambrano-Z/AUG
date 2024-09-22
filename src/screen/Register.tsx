import {
  Button,
  Col,
  DatePicker,
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
        <Input.Password 
        variant='borderless' 
        size='large' 
        placeholder='Ingrese una contraseña válida'/>
        <Input.Password 
        variant='borderless' 
        size='large' 
        placeholder='Ingrese de nuevo la contraseña para confirmación'/>
        <Input.TextArea 
        placeholder={'Ingrese su presentación,' + isLeaner ? 
          '¿Donde has estudiado? ¿Cuales son las asignaturas que más te gustan?, ¿Cuales son tus hobbies?... entre otras que consideres' : 
          '¿Donde estudio?, ¿Donde ha trabajado?, ¿Cuantos años tiene de experiencia?... entre otras que considere necesarias'} 
        size='large'
        variant='borderless'
        maxLength={300}/> : null
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
        <DatePicker/>
        <Select
        allowClear
        placeholder="Seleccione su género biológico"
        options={[
            {value:true, label:"Masculino"},
            {value:false, label:"femenino"}
          ]}
        />
        <Button>Registrarme</Button>
      </Col>
      <Col span={4}></Col>
    </Row>
  )
}