import './App.css';
import NavBar from './components/nav/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import GptModule from './components/gpt-module/gpt';
import Footer from './components/footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div>
     
      <div className="App">
        < NavBar />
      </div>

      <Container className='container-a'>
        <Row>
          <Col className='gtp-column'>
            <div className = 'text-box'>
            <h5>Chat GPT te ayuda a crear tu hoja de vida</h5> {/* Texto debajo de Introducción.*/}
            <p>¡Te damos la bienvenida a Disruptia!</p>
            <p>Como primer ejercicio, te invitamos a que, antes de continuar, pon tu mente lo más abierta posible... e intentes observar todo lo que encontrarás en este espacio de aprendizaje con una inmensa curiosidad. Ya que interactuarás con ambientes tecnológicos que, al igual que tú, están aprendiendo.<br></br>
Igualmente, si puedes, no sólo te quedes con lo que verás en estas interacciones, pues lo que te contaremos es sólo un abrebocas de lo que el tiempo presente y futuro tiene por ofrecerte. ¡Pues este es tu primer paso para trabajar y ser la mejor versión en tu trabajo!
<br></br>Vamos adelante!</p>
            </div>
          </Col>
          <Col>
            <GptModule />
          </Col>
        </Row>
      </Container>

      < Footer />
    </div>
  );
}

export default App;

