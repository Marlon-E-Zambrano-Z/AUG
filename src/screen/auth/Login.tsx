import { useNavigate } from 'react-router-dom';
import { sendCredentials } from '../../services/login.ts';
import { Form, Input, Button, Checkbox, Row, Col, Modal } from 'antd';
import { useState } from 'react';
import './../../app.css';

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

interface UserNotFound{
  visibility : boolean | undefined;
  handlerOk : (e: React.MouseEvent<HTMLElement>) => void;
}

function UserNotFound({visibility, handlerOk} : UserNotFound){
  return (<Modal
    title="Usuario no encontrado"
    open={visibility}
    onOk={handlerOk}
    okText="Aceptar"
  >
    <p>No se encontró un usuario con la información proporcionada. Por favor, verifique los datos e intente nuevamente.</p>
  </Modal>)
}

export default function Login(){
  const [form] = Form.useForm<LoginFormValues>();

  const [isModalActive, setModalActive] = useState(false)

  const navigate = useNavigate()

  const verifyTypeUser = (typeUser: string | null | undefined) => {
    if (typeUser === 'adviser') {
      navigate('/perfil_asesor');
    } else if (typeUser === 'learner') {
      navigate('/perfil_aprendiz');
    } else {
      <UserNotFound visibility={isModalActive} handlerOk={() => setModalActive(false)}/>
    }
  }

  const onFinish = (values: LoginFormValues) => {
    if(values.remember){
      const email = localStorage.getItem("idEmail")
      const password = localStorage.getItem("password")
      const typeUser : string | null = localStorage.getItem("typeUser")
      
      if(email === values.email.toLocaleLowerCase() && password === values.password.toLocaleLowerCase()){
        verifyTypeUser(typeUser)
      }else{
        sendCredentials(values.email, values.password)
        .then((result) => {
          if (result.status){
            verifyTypeUser(result.typeUser)
          }
        })
      }
    }
  };


  return (<>
    <Row justify="center" style={{ padding: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div className="login-form" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ textAlign: 'center' }}>Iniciar Sesión</h1>

          <Form form={form} onFinish={onFinish} layout="vertical">
            {/* Email */}
            <Form.Item
              label="Correo electrónico"
              name="email"
              rules={[
                { required: true, message: 'Por favor ingresa tu correo.' },
                { type: 'email', message: 'El correo no es válido.' }
              ]}
            >
              <Input placeholder="Ingresa tu correo" />
            </Form.Item>

            {/* Contraseña */}
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña.' }]}>
              <Input.Password placeholder="Ingresa tu contraseña" />
            </Form.Item>

            {/* Recordarme y enlace de recuperación */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Recordarme</Checkbox>
              </Form.Item>
              <a onClick={ () => navigate("/recuperar_contrasena")}>¿Olvidaste tu contraseña?</a>
            </div>

            {/* Botón de envío */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{color:"var(--secondary-color)",backgroundColor:"var(--beich)"
  }}>
                Iniciar sesión
              </Button>
            </Form.Item>

            {/* Aviso de términos y políticas */}
            <div style={{ textAlign: 'center', fontSize: '14px', color: '#888' }}>
              Al continuar, aceptas nuestros{' '}
              <a href="#">Términos de uso</a> y{' '}
              <a href="#">Política de privacidad</a>.
            </div>
          </Form>
        </div>
      </Col>
    </Row>
    </>);
};
