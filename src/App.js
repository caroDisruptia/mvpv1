import logo from './logo.svg';
import Nav from './components/nav/nav';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nuestro MVP esta online!!.
        </p>
        <a
          className="App-link"
          href="Disruptia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disruptia          
        </a>              
      </header>    
      
    </div>
    
  );
}

export default App;
