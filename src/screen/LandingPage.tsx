import { Layout, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../app.css';

const { Header, Content, Footer } = Layout;

export default function LandingPage(): JSX.Element {
  const navigate = useNavigate()
  const buttonStyle = {
    color:"var(--secondary-color)",
    backgroundColor:"var(--beich)"
  }
  return (<>
    <Layout>
      <Header className="header">
        <div className="logo">Mi Logo</div>
        <div className="navbar">
          <Button 
          className="nav-button"
          style={buttonStyle}
          onClick={() => navigate('/iniciar_sesion')}>Iniciar sesión</Button>
          <span className="pipe">|</span>
          <Button 
          className="nav-button" 
          style={buttonStyle}
          onClick={() => navigate('/registro')}>Registrarse</Button>
        </div>
      </Header>
      <Content className="content">
        <div className="columns">
          <div className="column left-column">Columna Izquierda</div>
          <div className="column center-column">
            <h2>Bienvenido a Asesoria Global</h2>
            <p>
            ¡Nos complace darte la bienvenida a Asesoria Global! Tu plataforma ideal para conectar a aprendices y asesores de manera efectiva y sencilla.

            En un mundo donde el aprendizaje y la formación continúan evolucionando, es fundamental contar con herramientas que faciliten la interacción y la colaboración. Asesoria Global está diseñada precisamente para eso. Aquí, creemos en el poder del conocimiento compartido y en la importancia de las relaciones que se forman a través de la mentoría y el aprendizaje colaborativo.
            </p>
          </div>
          <div className="column right-column">Columna Derecha</div>
        </div>
      </Content>
      <Footer className="footer">© 2024 Jhon E. Montoya M. - Marlon E. Zambrano Z. Todos los derechos reservados.</Footer>
    </Layout>
    </>);
};
