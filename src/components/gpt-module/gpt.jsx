import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card } from "react-bootstrap";
import "./gpt.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./PDFGenerator";

function GptModule({ pulsar, loading }) {
  const [valuesForm, setValuesForm] = useState({
    name: "",
    phone: "",
    email: "",
    profile: "",
    job: "",
    studys: "",
  });

  const on_change = ({ target }) => {
    setValuesForm({ ...valuesForm, [target.name]: target.value });
  };

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
                name="name"
                onChange={on_change}
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
                name="phone"
                onChange={on_change}
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
                
                name="email"
                onChange={on_change}
              />
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary mb-3"
            disabled={loading}
            onClick={() => {
              const quest =
                "Dame instrucciones de cómo hacer mi perfil de hoja de vida de manera concreta. Esta instrucción dámela en 70 palabras. Empieza la instrucción saludándome con el nombre de 'Disrupter' ";
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
                name="profile"
                onChange={on_change}
              />
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary mb-3"
            disabled={loading}
            onClick={() => {
              const quest =
                "Dame instrucciones de cómo hacer la parte de mi experiencia en mi hoja de vida de manera concisa. Empieza la instrucción: 'Disrupter ten en cuenta', no me saludes de nuevo. Esta instrucción dámela en 70 palabras";
              pulsar(quest);
            }}
          >
            Enviar
          </button>

          <div className="tab">
            <h6 className="border-title">Escribe donde has trabajado</h6>
            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Donde has trabajado..."
                name="job"
                onChange={on_change}
              />
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary mb-3"
            disabled={loading}
            onClick={() => {
              const quest =
                "Dame instrucciones de cómo hacer la parte de mi formación y estudios académicos de manera concisa. Empieza la instrucción diciéndome: 'Disrupter, ya tienes tu perfil y tu experiencia trabajando'. Esta instrucción dámela máximo en 70 palabras.";
              pulsar(quest);
            }}
          >
            Enviar
          </button>
          <div className="tab">
            <h6 className="border-title">Escribe donde has estudiado</h6>
            <p>
              <input
                autoComplete="off"
                className="input-border"
                placeholder="Donde has estudiado..."
                name="studys"
                onChange={on_change}
              />
            </p>
          </div>
        </form>
      </Card>
      <div className="d-flex justify-content-end">
        <PDFDownloadLink
          document={<MyDocument valuesForm={valuesForm} />}
          fileName="document.pdf"
        >
          <button type="button" className="btn btn-primary my-3">
            Exportar pdf
          </button>
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default GptModule;
