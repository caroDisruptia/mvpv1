import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './gpt.css';
import axios from "axios";

function GptModule() {
  //const baseUrL = "https://gpt-int.onrender.com/chat";
  const baseUrL = "http://localhost:8080/chat";
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  let quest = "";
  function pulsar(quest){
        const prompt = quest;
    axios
      .post(baseUrL, { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
      console.log(baseUrL);
      console.log("fin del metodo"); 
  }
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
                placeholder="Experiencia..."
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
            onClick={() => {
              const quest = "Como escribir mi perfil en mi hoja de vida";
              pulsar(quest);
            }}
          >
            Enviar
          </button> 
          <p>{response}</p>
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
            onClick={() => {
              const quest =
                "Como escribir mi experiencia laboral en mi hoja de vida";
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