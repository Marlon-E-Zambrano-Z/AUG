import { Form, Input, Select, Button, DatePicker, Row, Col } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';

const { TextArea } = Input;
const { Option } = Select;

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  category: string;
  birthdate: dayjs.Dayjs;
  comments: string;
}

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>();

  // Lista de ocupaciones
  const occupations = [
    'Docente de primaria', 'Profesor de secundaria', 'Profesor universitario', 'Instructor de IA',
    'Mentor de desarrollo de software', 'Capacitador de recursos humanos', 'Entrenador personal',
    'Instructor de yoga', 'Consultor de tecnología educativa', 'Formador de idiomas'
  ];

  // Lista de categorías
  const categories = [
    'Matemáticas', 'Ciencias', 'Literatura', 'Programación', 'Robótica', 'Inteligencia Artificial',
    'Economía', 'Física', 'Arte digital', 'Ciberseguridad'
  ];

  // Validación personalizada para la contraseña
  const validatePassword = (_: any, value: string) => {
    if (!value || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.'));
  };

  const onFinish = (values: FormValues) => {
    console.log('Formulario enviado:', values);
  };

  return (
    <Row justify="center" style={{ padding: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div className="register-form" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ textAlign: 'center' }}>Registrate como Profesor</h1>
          <p style={{ textAlign: 'center' }}>¿Ya tienes una cuenta? <a href="#">Ingresa</a></p>

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

            {/* Ocupación */}
            <Form.Item
              label="Ocupación"
              name="occupation"
              rules={[{ required: true, message: 'Por favor selecciona tu ocupación.' }]}
            >
              <Select placeholder="Selecciona tu ocupación">
                {occupations.map((occupation) => (
                  <Option key={occupation} value={occupation}>{occupation}</Option>
                ))}
              </Select>
            </Form.Item>

            {/* Categoría */}
            <Form.Item
              label="Categoría"
              name="category"
              rules={[{ required: true, message: 'Por favor selecciona una categoría.' }]}
            >
              <Select placeholder="Selecciona una categoría">
                {categories.map((category) => (
                  <Option key={category} value={category}>{category}</Option>
                ))}
              </Select>
            </Form.Item>

            {/* Fecha */}
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

            {/* Comentarios */}
            <Form.Item
              label="Presentación"
              name="comments"
              rules={[{ required: true, message: 'Cuentenos por favor en que trabaja' }]}
            >
              <TextArea
                placeholder="Cuentenos por favor sobre su trabajo"
                maxLength={300}
                rows={4}
              />
            </Form.Item>

            {/* Botón de envío */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{color:"var(--secondary-color)",backgroundColor:"var(--beich)"}}>
                Registrarse
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterForm;
