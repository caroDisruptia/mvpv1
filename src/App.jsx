import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/home/home';
import Hdv from  './components/hdv/hdv';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hdv" element={<Hdv />} />  
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
