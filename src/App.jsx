import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/home/home';
import Hdv from  './components/hdv/hdv';
import Empresa from './components/enterprise/enterprise';
import Contact from "./components/contact/contact";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hdv" element={<Hdv />} />
      <Route path="/empresas" element={<Empresa />} />  
      <Route path="/contacto" element={<Contact />} />  
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
