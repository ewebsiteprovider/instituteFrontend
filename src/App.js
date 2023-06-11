import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/HomePage";
import NavBar from "./components/nav/NavBar";
import Foundation from "./components/foundation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/foundation" element={<Foundation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
