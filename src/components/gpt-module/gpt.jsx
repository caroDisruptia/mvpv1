import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card } from "react-bootstrap";
import "./gpt.css";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./PDFGenerator";

function GptModule({ pulsar, loading, activeKey, setActiveKey }) {
  const [valuesForm, setValuesForm] = useState({
    name: "",
    phone: "",
    email: "",
    profile: "",
    job: "",
    studys: "",
  });

  console.log("activa key", activeKey);
  const on_change = ({ target }) => {
    setValuesForm({ ...valuesForm, [target.name]: target.value });
  };

  return (
    <>
      <form id="">
        {activeKey === "1" && (
          <>
            <div className="tab">
              <h6 className="border-title">Escribe tu nombre completo</h6>
              <p>
                <input
                  defaultValue={valuesForm.name}
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
                  defaultValue={valuesForm.phone}
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
                  defaultValue={valuesForm.email}
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
              onClick={async() => {
                const quest =
                  "Dame instrucciones de cómo hacer mi perfil de hoja de vida de manera concreta. Esta instrucción dámela en 70 palabras. Empieza la instrucción saludándome con el nombre de 'Disrupter' ";
                await pulsar(quest);
                setActiveKey('2');
              }}
            >
              Enviar
            </button>
          </>
        )}

        {activeKey === "2" && (
          <>
            <div className="tab">
              <h6 className="border-title">Escribe Perfil laboral</h6>
              <p>
                <textarea
                  defaultValue={valuesForm.profile}
                  autoComplete="off"
                  className="input-border form-control"
                  placeholder="Escribe tu perfil laboral..."
                  name="profile"
                  style={{ minHeight: "200px" }}
                  onChange={on_change}
                />
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary mb-3"
              disabled={loading}
              onClick={async() => {
                const quest =
                  "Dame instrucciones de cómo hacer la parte de mi experiencia en mi hoja de vida de manera concisa. Empieza la instrucción: 'Disrupter ten en cuenta', no me saludes de nuevo. Esta instrucción dámela en 70 palabras";
                await pulsar(quest);
                setActiveKey('3');
              }}
            >
              Enviar
            </button>
          </>
        )}

        {activeKey === "3" && (
          <>
            <div className="tab">
              <h6 className="border-title">Escribe donde has trabajado</h6>
              <p>
                <textarea
                  defaultValue={valuesForm.job}
                  autoComplete="off"
                  className="input-border form-control"
                  placeholder="Escribe los lugares donde has trabajado..."
                  name="job"
                  style={{ minHeight: "200px" }}
                  onChange={on_change}
                />
              </p>
            </div>
            <button
              type="button"
              class="btn btn-primary mb-3"
              disabled={loading}
              onClick={async () => {
                const quest =
                  "Dame instrucciones de cómo hacer la parte de mi formación y estudios académicos de manera concisa. Empieza la instrucción diciéndome: 'Disrupter, ya tienes tu perfil y tu experiencia trabajando'. Esta instrucción dámela máximo en 70 palabras.";
                await pulsar(quest);
                setActiveKey('4');
              }}
            >
              Enviar
            </button>
          </>
        )}

        {activeKey === "4" && (
          <>
            <div className="tab">
              <h6 className="border-title">Escribe donde has estudiado</h6>
              <p>
                <textarea
                  defaultValue={valuesForm.studys}
                  autoComplete="off"
                  className="input-border form-control"
                  placeholder="Donde has estudiado..."
                  name="studys"
                  onChange={on_change}
                  style={{ minHeight: "200px" }}
                />
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary mb-3"
              disabled={loading}
              onClick={async () => {
                const quest =
                  "Dame instrucciones de cómo hacer mi perfil de hoja de vida de manera concreta. Esta instrucción dámela en 70 palabras. Empieza la instrucción saludándome con el nombre de 'Disrupter' ";
                await pulsar(quest);
                setActiveKey('5');
              }}
            >
              Enviar
            </button>
          </>
        )}
      </form>
      {activeKey === "5" && (
        <>
          <PDFViewer
            className="w-100"
            style={{ height: 600 }}
            showToolbar={false}
          >
            <MyDocument valuesForm={valuesForm} />
          </PDFViewer>
          <div className="d-flex justify-content-center">
            <PDFDownloadLink
              document={<MyDocument valuesForm={valuesForm} />}
              fileName="document.pdf"
            >
              <button type="button" className="btn btn-primary my-3">
                Descargar PDF
              </button>
            </PDFDownloadLink>
          </div>
        </>
      )}
    </>
  );
}

export default GptModule;
