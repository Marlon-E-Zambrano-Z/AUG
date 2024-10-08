import React, { useState } from 'react';
import { Form, Input, Button, Radio, Row, Col, Card } from 'antd';
import { UserOutlined, SolutionOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const UserSelectionForm: React.FC = () => {
  const navigate = useNavigate()
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  const onUserTypeChange = (e: any) => {
    setSelectedUserType(e.target.value);
  };

  const onFinish = (values: any) => {
    console.log('Formulario enviado:', values);
  };

  
  return (
    <Row justify="center" style={{ padding: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div className="user-selection-form" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ textAlign: 'center' }}>Selecciona el tipo de usuario</h2>

          <Form onFinish={onFinish} layout="vertical">
            {/* Grupo de radio para selección del tipo de usuario */}
            <Form.Item
              name="userType"
              rules={[{ required: true, message: 'Por favor selecciona el tipo de usuario.' }]}
            >
              <Radio.Group onChange={onUserTypeChange} style={{ width: '100%' }}>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Card
                      hoverable
                      onClick={() => {navigate("/aprendiz");setSelectedUserType('Aprendiz')}}
                      className={selectedUserType === 'Aprendiz' ? 'selected-card' : ''}
                      cover={<UserOutlined style={{ fontSize: '50px', color: 'var(--light-blue)', marginTop: '20px' }} />}
                    >
                      <Card.Meta title="Aprendiz" description="Persona en proceso de aprendizaje" />
                    </Card>
                  </Col>
                  <Col xs={24} md={12}>
                    <Card
                      hoverable
                      onClick={() => {navigate("/asesor");setSelectedUserType('Asesor')}}
                      className={selectedUserType === 'Asesor' ? 'selected-card' : ''}
                      cover={<SolutionOutlined style={{ fontSize: '50px', color: 'var(--light-blue)', marginTop: '20px' }} />}
                    >
                      <Card.Meta title="Asesor" description="Persona que ofrece orientación o enseñanza" />
                    </Card>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>

            {/* Input de correo electrónico */}
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

            {/* Input de contraseña */}
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña.' }]}
            >
              <Input.Password placeholder="Ingresa tu contraseña" />
            </Form.Item>

            {/* Botón de envío */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Continuar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default UserSelectionForm;
