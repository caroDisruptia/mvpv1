import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../nav/nav";
import Footer from "../footer/footer";

function Home() {
  return (    
    <div>
   <NavBar/>
    {/* Page Content */}
    <div class="container px-4 px-lg-5">
         {/* Heading Row  */}
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." /></div>
            <div class="col-lg-5">
                <h2 class="font-weight-light">Talento diverso y de impacto para las empresas de America Latina</h2>          
                
            </div>
        </div>        
        {/* Content Row  */}
        <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-5">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Quiero conseguir trabajo</h3>
                        <p class="card-text">Conoce nuestras rutas de aprendizaje para formarte de forma ágil y acceder a oportunidades laborales de las vancantes mas demandadas actualmente.</p>
                    </div>
                    <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">Soy talento</a></div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Quiero conseguir talento</h3>
                        <p class="card-text">Con ayuda de inteligencia artificial identifica, crea, publica y encuentra talento de impacto para las vacantes que tienes en tu empresa y encuentra el talento adecuado.</p>
                    </div>
                    <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">Busco talento</a></div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Mi hoja de vida con AI</h3>
                        <p class="card-text">Con ayuda de la inteligencia artificial aprende y crea tu hoja de vida de manera más sencilla. Quedará lista y será visible para para las mejores oportunidades de trabajo para ti</p>
                    </div>
                    <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">Hacer mi Hdv</a></div>
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
