import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

const baseUrL = "https://gpt-int.onrender.com/chat";

function JobModule() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(baseUrL, { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container className="container-a" >
      <div className="text-box">
        <h5>La Inteligencia Artificial de Disruptia te enseña a crear tu hoja de vida</h5>
       
       
        <div>
           {/* 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
  </form>*/}
      <p>{response}</p>
    </div>
      </div>
    </Container>
  );
}

export default JobModule;
