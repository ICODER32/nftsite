import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs, Characters, Dashboard, Home } from "./pages/index";
import { Navigation } from "./components";
import Slider from "./pages/Slider/Slider";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gallery" element={<Slider />} />
      </Routes>
    </>
  );
}

export default App;
