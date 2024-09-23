import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Flex,
  Input,
  Row,
  Select 
} from 'antd'

import { 
  button, 
  combobox, 
  localtimeTextfield,
  textfield
} from '../css/config_provider.ts';

import * as global from "./../utils/Body.ts"

import { RED_LIGHT, BLUE_LIGHT } from '../css/Colors';

import { useEffect, useState } from 'react'
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
  
  const [isLeaner, setIsLearner] = useState< boolean | undefined >(undefined);
  
  const handlerRenderUserForm  = (value : boolean | undefined)  => setIsLearner( value );

  useEffect(() => {
    /*
    Se agregan propiedades que son globales pero son 
    necesarias para una visualizacion correcta
    */
    global.setBackgroundGradientDiagonal(RED_LIGHT,BLUE_LIGHT)
    global.setMinHeight("100vh")
  }, [])

  return (
    <ConfigProvider
    theme={{
      components: {
        Input : textfield,
        Button : button,
        Select : combobox,
        DatePicker : localtimeTextfield
      }
    }}
    >
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
      <Flex 
        vertical
        align='flex-start'
        justify='space-around'
        gap="large"
      >
        <Select
        autoFocus
        placeholder="Selecciona el rol "
        options={[
          {value:true,label:"Aprendiz"},
          {value:false,label:"Asesor"},
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
        maxLength={300}/>
        
          {!isLeaner ? <Input
          placeholder='Ingrese su ocupación'
          size='large'
          variant='borderless'
          maxLength={50}
          /> : ""
          }
          {!isLeaner ? <Select
          allowClear
          placeholder="Selecciona la categoria"
          options={[
            {value:"comunicacion",label:"Comunicación"},
            {value:"artes",label:"Artes"}
            ]}
          /> : ""
          }
          <DatePicker 
          placeholder='Ingrese su cumpleaños'
          size='large'
          />
          <Select
          allowClear
          placeholder="Seleccione su género biológico"
          options={[
              {value:true, label:"Masculino"},
              {value:false, label:"femenino"}
            ]}
          />
        </Flex>
        <Flex 
        vertical
        align='center'
        justify='center'
        >
          <Button>Registrarme</Button>
        </Flex>
      </Col>
      <Col span={4}></Col>
    </Row>
    </ConfigProvider>
  )
}