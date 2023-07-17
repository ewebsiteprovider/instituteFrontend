import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/HomePage";
import NavBar from "./components/nav/NavBar";
import Foundation from "./components/foundation";
import Scholarship from "./components/scholarship";
import JeeApp from "./components/jee/JeeApp";
import NeetApp from "./components/neet/NeetApp";
import Result from "./components/result/Result";
import Enquiry from "./components/enquiry/Enquiry";
import LoginPage from "./components/loginForm/LoginPage";
import RegistrationPage from "./components/registrationForm/RegistrationPage";
import LottieAnimation from "./components/LottieAnimation";
import RequestCall from "./components/RequestCall";
import { useState } from "react";

function App() {

  const [formStatus, setFormStatus] = useState(false);

  const handleCallFrom = () => {
    formStatus ? setFormStatus(false) : setFormStatus(true);
  }

  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/foundation" element={<Foundation />} />
          <Route exact path="/Scholarship" element={<Scholarship />} />
          <Route exact path="/jee" element={<JeeApp />} />
          <Route exact path="/neet" element={<NeetApp />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/enquiry" element={<Enquiry />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegistrationPage />} />
        </Routes>

        {formStatus ? (<div><RequestCall /></div>):(<div></div>)}
        
        <div className='fixed bottom-[-180px] w-[90px] lg:w-[120px] cursor-pointer z-10' title="Request call" onClick={handleCallFrom}>
          {formStatus ? <LottieAnimation animationUrl="https://lottie.host/2801f0dd-a59f-4c1d-8ccc-d43d67b2ee98/YESBZXCd8f.json" /> : <LottieAnimation animationUrl="https://lottie.host/84e0fcc3-27ba-4fa2-b2d1-ee70904a757d/LIeFI1WkTo.json" />}
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
