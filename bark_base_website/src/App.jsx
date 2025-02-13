import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TrainingProgramsPage from "./pages/TrainingProgramsPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // 🔹 Ensures the full viewport height
        }}
      >
        <Navbar />
        <Box sx={{ flex: 1 }}>
          {" "}
          {/* 🔹 Pushes footer to bottom when content is short */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/training-programs"
              element={<TrainingProgramsPage />}
            />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
        <Footer /> {/* Footer to appear on every page. */}
      </Box>
    </Router>
  );
}

export default App;
