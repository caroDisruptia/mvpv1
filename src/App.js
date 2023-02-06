import './App.css';
import NavBar from './components/nav/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobModule from './components/job-module/job-module';
import GptModule from './components/gpt-module/gpt';
import Footer from './components/footer/footer';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div>
     
      <div className="App">
        < NavBar />
      </div>

      <Container className='container-a'>
        
        <JobModule />
      <GptModule />

      < Footer />
    
    </Container>
    </div>
  );
}

export default App;

