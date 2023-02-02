
import 'bootstrap/dist/css/bootstrap.min.css';
import './gpt.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function GptModule() {
    return (
        <div className='section'>
            <Card className="shadow">              
            <form id="regForm">
                <h1 id="register">Hoja de vida</h1>
                <div className="tab">
                  <h6>Escribe una Introducción...</h6>
                    <p>
                      <input placeholder="Introducción" oninput="this.className = ''" name="fname"/></p>                    
                </div>
                <div className="tab">
                  <h6>Escribe tu Experiencia laboral</h6>
                    <p>
                      <input placeholder="Experiencia..." oninput="this.className = ''" name="fname"/></p>                    
                </div>
                <div className="tab">
                  <h6>Escrribe donde has estudiado</h6>
                    <p>
                      <input placeholder="Donde has estudiado..." oninput="this.className = ''" name="fname"/></p>                    
                </div>
                <div className="tab">
                  <h6>Escribe unas referencias personales</h6>
                    <p>
                      <input placeholder="referencias..." oninput="this.className = ''" name="fname"/></p>                    
                </div>
                
                </form>
                </Card>

        </div>

    )
}

export default GptModule;