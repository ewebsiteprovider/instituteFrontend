import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/HomePage";
import NavBar from "./components/nav/NavBar";
import Foundation from "./components/foundation";
import Scholarship from "./components/scholarship";
import JeeApp from "./jee/JeeApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/foundation" element={<Foundation />} />
          <Route exact path="/Scholarship" element={<Scholarship />} />
          {/* <Route exact path="/jee" element={<JeeApp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
