
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './gpt.css';

function GptModule() {
    return (
        <div className='section my-3'>
            <Card className="shadow">              
            <form id="regForm">
                <h1 id="register">Hoja de vida</h1>
                <div className="tab">
                  <h6>Escribe tu nombre</h6>
                    <p>
                      <input  placeholder="Nombre..." oninput="this.className = ''" name="fname"/></p>                    
                </div>
                <div className="tab">
                  <h6>Escribe tu teléfono</h6>
                    <p>
                      <input placeholder="Experiencia..." oninput="this.className = ''" name="fname"/></p>                    
                </div>
                <div className="tab">
                  <h6>Escribe tu email</h6>
                    <p>
                      <input placeholder="Email..." oninput="this.className = ''" name="fname"/></p>                    
                </div>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <div className="tab">
                  <h6>Escribe Perfil laboral</h6>
                    <p>
                      <input placeholder="Tu perfil aqui..." oninput="this.className = ''" name="fname"/></p>                    
                </div>
                <button type="button" class="btn btn-secondary">Secondary</button>

                <div className="tab">
                  <h6>Escribe donde has trabajado</h6>
                    <p>
                      <input placeholder="Donde has trabajado..." oninput="this.className = ''" name="fname"/></p>                    
                </div>  
                <button type="button" class="btn btn-secondary">Secondary</button>
                <div className="tab">
                  <h6>Escribe donde has estudiado</h6>
                    <p>
                      <input placeholder="Donde has estudiado..." oninput="this.className = ''" name="fname"/></p>                    
                </div>  
                             
                </form>
                </Card>
                <button type="button" class="btn btn-secondary">Secondary</button>

        </div>

    )
}

export default GptModule;