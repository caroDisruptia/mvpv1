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
            <p>Intrucciones de lo que debe hacer el disrupter</p>
            <p>TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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

