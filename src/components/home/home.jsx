import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../nav/nav";
import Footer from "../footer/footer";
import './image.css';
import imagenLogo from '../../assets/img/logoDisruptiaBlancoyNegro.png'
function Home() {
  return (
    <div className="w-100 h-100">
      {/* Responsive navbar */}
      <NavBar />
      {/* Page Content */}
      <div class=" overflow-auto main-content">
        <div className="container px-4 px-lg-5">
          {/* Heading Row  */}
          <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7 img-banner rounded mb-4 mb-lg-0">
            </div>
            <div class="col-lg-5 information-banner">
              <h2 class="font-weight-light text-banner">
                Talento <span>diverso y de impacto</span> para las empresas de América Latina
              </h2>
              <img src={imagenLogo} class="img-fluid" width='200' alt="Imagen Disruptia" />
            </div>
          </div>

          {/* Content Row  */}
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-6 mb-5">
              <div class="card h-100 card-banner">
                <div class="card-body">
                  <h2 class="card-title">Quiero conseguir trabajo</h2>
                  <p class="card-text">
                    Conoce nuestras rutas de aprendizaje para formarte de forma
                    ágil y acceder a oportunidades laborales de las vacantes más
                    demandadas actualmente.
                  </p>
                </div>
                <div class="card-footer">
                  <a class="btn btn-primary btn-sm" href="#!">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <div class="card h-100 card-banner">
                <div class="card-body">
                  <h2 class="card-title">Quiero encontrar talento</h2>
                  <p class="card-text">
                    Con ayuda de inteligencia artificial identifica, crea,
                    publica y encuentra talento de impacto para las vacantes que
                    tienes en tu empresa y encuentra el equipo adecuado.
                  </p>
                </div>
                <div class="card-footer">
                  <a class="btn btn-primary btn-sm" href="#!">
                    More Info
                  </a>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Bootstrap core JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* Core theme JS */}
      <script src="js/scripts.js"></script>
    </div>
  );
}

export default Home;
