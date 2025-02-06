import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {" "}
      {/* Tailwind styling */}
      <Router>
        <Navbar /> {/* Navigation menu at the top */}
        <div className="container mx-auto p-4">
          {" "}
          {/* Adds spacing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
