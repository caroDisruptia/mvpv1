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
    
    <Container className='woki'>
      <Row>
        <Col className='gtp-column'>Column 1.         
        </Col>
        <Col>Columna 2
        <GptModule />
        </Col>
      </Row>      
    </Container>   
    
    <div>           
    </div>
    <Footer />
    </div>    
  );
}

export default App;

