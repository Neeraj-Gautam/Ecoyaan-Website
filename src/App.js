import "./App.css";
import HomePage from "./Components/HomePage/homePage.js";
import AboutUs from "./Components/AboutUs/AboutUs.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
