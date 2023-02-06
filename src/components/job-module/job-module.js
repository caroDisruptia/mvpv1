import Container from "react-bootstrap/Container";

function JobModule() {
  return (
    <Container className="container-a" >
      <div className="text-box">
        <h5>Chat GPT te ayuda a crear tu hoja de vida</h5>{" "}
        {/* Texto debajo de Introducción.*/}
        <p>¡Te damos la bienvenida a Disruptia!</p>
        <p style={{ textAlign: "justify" }}>
          Como primer ejercicio, te invitamos a que, antes de continuar, pon tu
          mente lo más abierta posible... e intentes observar todo lo que
          encontrarás en este espacio de aprendizaje con una inmensa curiosidad.
          Ya que interactuarás con ambientes tecnológicos que, al igual que tú,
          están aprendiendo.<br></br>
          Igualmente, si puedes, no sólo te quedes con lo que verás en estas
          interacciones, pues lo que te contaremos es sólo un abrebocas de lo
          que el tiempo presente y futuro tiene por ofrecerte. ¡Pues este es tu
          primer paso para trabajar y ser la mejor versión en tu trabajo!
          <br></br>Vamos adelante!
        </p>
      </div>
    </Container>
  );
}

export default JobModule;
