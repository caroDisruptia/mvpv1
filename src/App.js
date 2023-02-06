import "./App.css";
import NavBar from "./components/nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import JobModule from "./components/job-module/job-module";
import GptModule from "./components/gpt-module/gpt";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <JobModule />
          </div>
          <div className="col-12 col-md-6">
            <GptModule />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
