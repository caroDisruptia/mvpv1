import "./hdv.css";
import NavBar from '../nav/nav';
import "bootstrap/dist/css/bootstrap.min.css";
import JobModule from "../job-module/job-module"; //"./components/job-module/job-module"
import GptModule from "../gpt-module/gpt"; //"./components/gpt-module/gpt"
import Footer from '../footer/footer';
import { useState } from "react";
import axios from "axios";
import TabHdv from "./TabHdv";

function Hdv() {
  const baseUrL = "https://gpt-int.onrender.com/chat";
  // const baseUrL = "http://localhost:8080/chat";
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (quest) => {
    setLoading(true);
    setResponse('');
    try {
      const res = await axios.post(baseUrL, { prompt: quest });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-100 h-100">
      <NavBar />
      <div className="overflow-auto main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <JobModule response={response} loading={loading} />
            </div>
            <div className="col-12 col-md-6">
              {/* <GptModule  /> */}
              <TabHdv pulsar={handleSubmit} loading={loading} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Hdv;
