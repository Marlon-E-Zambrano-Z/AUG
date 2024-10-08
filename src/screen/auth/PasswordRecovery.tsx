import { useState, useRef } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "../../app.css"

const RequestEmail: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [form] = Form.useForm();

  const onFinish = (values: { email: string }) => {
    console.log('Correo enviado:', values.email);
    onNext();
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Recuperación de Contraseña</h2>
      <Form form={form} onFinish={onFinish} layout="vertical">
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
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Enviar código
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const VerifyCode: React.FC<{ onVerify: () => void, onFail: () => void }> = ({ onVerify, onFail }) => {
  const [code, setCode] = useState<string[]>(Array(4).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1) {
      setCode(prev => prev.map((v, i) => (i === index ? value : v)));
      if (index < 3 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');
    if (enteredCode === '1234') { // Código de ejemplo
      onVerify();
    } else {
      onFail();
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Ingresa el código</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {code.map((_, index) => (
          <Input
            key={index}
            maxLength={1}
            style={{ width: '50px', textAlign: 'center', fontSize: '24px' }}
            ref={el => (inputsRef.current[index] = el)}
            value={code[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <Button type="primary" block onClick={handleVerify}>
        Verificar
      </Button>
    </div>
  );
};

const SuccessMessage: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => (
  <div>
    <h2 style={{ textAlign: 'center', fontSize: '24px' }}>¡Código verificado con éxito!</h2>
    <p style={{ textAlign: 'center' }}>
      <a href="#" onClick={onGoBack}>Volver al login</a>
    </p>
  </div>
);

const PasswordRecovery: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isFail, setIsFail] = useState<boolean>(false);

  const goToNextStep = () => setStep(step + 1);
  const handleFail = () => setIsFail(true);

  const goToLogin = () => {
    // Lógica para volver al login
    setStep(1);
    setIsFail(false);
  };

  return (
    <Row justify="center" style={{ padding: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div className="password-recovery" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <SwitchTransition>
            <CSSTransition
              key={step}
              timeout={300}
              classNames="slide"
            >
              <div>
                {step === 1 && <RequestEmail onNext={goToNextStep} />}
                {step === 2 && <VerifyCode onVerify={goToNextStep} onFail={handleFail} />}
                {step === 3 && <SuccessMessage onGoBack={goToLogin} />}
              </div>
            </CSSTransition>
          </SwitchTransition>

          {/* Mostrar error si el código es incorrecto */}
          {isFail && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
              Código incorrecto, por favor verifica e intenta de nuevo.
            </p>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default PasswordRecovery;
