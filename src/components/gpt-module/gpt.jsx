import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './gpt.css';

function GptModule({ pulsar, loading }) {
  
     return (
      <div className="section my-3">
      <Card className="shadow">
        <form id="regForm">
          <h1 id="register">Hoja de vida</h1>
          <div className="tab">
            <h6 className="border-title">Escribe tu nombre completo</h6>

            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Nombre..."
                oninput="this.className = ''"
                name="fname"
              />
            </p>
          </div>
          <div className="tab">
            <h6 className="border-title">Escribe tu teléfono</h6>
            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Teléfono..."
                oninput="this.className = ''"
                name="fname"
              />
            </p>
          </div>
          <div className="tab">
            <h6 className="border-title">
              Escribe tu correo electrónico (e-mail)
            </h6>
            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Email..."
                oninput="this.className = ''"
                name="fname"
              />
            </p>
          </div>
          <button
            type="button"
            class="btn btn-primary mb-3"
            disabled={loading}
            onClick={() => {
              const quest = "Dame instrucciones de cómo hacer la parte de mi experiencia en mi hoja de vida de manera concisa. Empieza la instrucción diciéndome: 'Disrupter, ahora, teniendo en cuenta que ya hiciste tu perfil'. Esta instrucción dámela en 70 palabras.";
              pulsar(quest);
            }}
          >
            Enviar
          </button> 
          <div className="tab">
            <h6 className="border-title">Escribe Perfil laboral</h6>
            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Tu perfil aqui..."
                oninput="this.className = ''"
                name="fname"
              />
            </p>
          </div>
          <button
            type="button"
            class="btn btn-primary mb-3"
            disabled={loading}
            onClick={() => {
              const quest = "Dame instrucciones de cómo hacer la parte de mi experiencia en mi hoja de vida de manera concisa. Empieza la instrucción 'Disrupter ten en cuenta', no me saludes de nuevo. Esta instrucción dámela en 70 palabras";
              
              pulsar(quest);
            }}
          >
            Secondary
          </button>

          <div className="tab">
            <h6 className="border-title">Escribe donde has trabajado</h6>
            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Donde has trabajado..."
                oninput="this.className = ''"
                name="fname"
              />
            </p>
          </div>
          <button type="button" class="btn btn-primary mb-3">
            Secondary
          </button>
          <div className="tab">
            <h6 className="border-title">Escribe donde has estudiado</h6>
            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Donde has estudiado..."
                oninput="this.className = ''"
                name="fname"
              />
            </p>
          </div>
        </form>
      </Card>
      <div className="d-flex justify-content-end">
        <button type="button" class="btn btn-primary my-3">
          Exportar pdf
        </button>
      </div>
    </div>
    )
}

export default GptModule;