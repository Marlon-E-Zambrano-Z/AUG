import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import './../../app.css';

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: React.FC = () => {
  const [form] = Form.useForm<LoginFormValues>();

  const onFinish = (values: LoginFormValues) => {
    console.log('Formulario enviado:', values);
  };

  return (
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
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña.' }]}
            >
              <Input.Password placeholder="Ingresa tu contraseña" />
            </Form.Item>

            {/* Recordarme y enlace de recuperación */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Recordarme</Checkbox>
              </Form.Item>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            {/* Botón de envío */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Iniciar sesión
              </Button>
            </Form.Item>

            {/* Aviso de términos y políticas */}
            <div style={{ textAlign: 'center', fontSize: '14px', color: '#888' }}>
              Al continuar, aceptas nuestros{' '}
              <a href="#" style={{ color: '#1890ff' }}>Términos de uso</a> y{' '}
              <a href="#" style={{ color: '#1890ff' }}>Política de privacidad</a>.
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginForm;
