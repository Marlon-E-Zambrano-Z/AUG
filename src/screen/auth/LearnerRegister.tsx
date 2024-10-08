import { Form, Input, Button, DatePicker, Row, Col } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';

const { TextArea } = Input;

interface StudentFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthdate: dayjs.Dayjs;
  description: string;
}

export default function StudentRegister(){
  const [form] = Form.useForm<StudentFormValues>();

  // Validación personalizada para la contraseña
  const validatePassword = (_: any, value: string) => {
    if (!value || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.'));
  };

  const onFinish = (values: StudentFormValues) => {
    console.log('Formulario enviado:', values);
  };

  return (
    <Row justify="center" style={{ padding: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div className="student-register-form" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ textAlign: 'center' }}>Registro de Estudiante</h1>

          <Form form={form} onFinish={onFinish} layout="vertical">
            {/* Nombre */}
            <Form.Item
              label="Nombre"
              name="name"
              rules={[{ required: true, message: 'Por favor ingresa tu nombre.' }]}
            >
              <Input placeholder="Ingresa tu nombre" />
            </Form.Item>

            {/* Correo */}
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

            {/* Descripción */}
            <Form.Item
              label="Descripción"
              name="description"
              rules={[{ required: true, message: 'Por favor escribe una descripción (máximo 300 caracteres).' }]}
            >
              <TextArea
                placeholder="Describe brevemente tu perfil"
                maxLength={300}
                rows={4}
              />
            </Form.Item>

            {/* Contraseña */}
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                { required: true, message: 'Por favor ingresa tu contraseña.' },
                { validator: validatePassword }
              ]}
            >
              <Input.Password placeholder="Ingresa tu contraseña" />
            </Form.Item>

            {/* Verificar contraseña */}
            <Form.Item
              label="Verifica tu contraseña"
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Por favor verifica tu contraseña.' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Las contraseñas no coinciden.'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Reingresa tu contraseña" />
            </Form.Item>

            {/* Fecha de nacimiento */}
            <Form.Item
              label="Fecha de nacimiento"
              name="birthdate"
              rules={[{ required: true, message: 'Por favor selecciona tu fecha de nacimiento.' }]}
            >
              <DatePicker
                locale={locale}
                placeholder="Selecciona una fecha"
                style={{ width: '100%' }}
              />
            </Form.Item>

            {/* Botón de envío */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Registrarse
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
