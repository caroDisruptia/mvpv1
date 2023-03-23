import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

function JobModule({ response, loading }) {
  console.log(loading);
  return (
    <Container className="container-a">
      <div className="text-box">
        <h5>
          La Inteligencia Artificial de Disruptia te acompaña a crear tu hoja de
          vida...
        </h5>

        <div>
          {loading && (
            <div className="text-center mt-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <div>
                Estamos construyendo una recomendación personalizada para ti
              </div>
            </div>
          )}
          <p style={{ textAlign: "justify" }}>{response}</p>
        </div>
      </div>
    </Container>
  );
}

export default JobModule;
