import { Container, Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xnnjbgyq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/pup_back_7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        paddingTop: "64px",
      }}
    >
      {/* 🔹 Overlay for Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* 🔹 Content Container */}
      <Container
        maxWidth="sm"
        sx={{
          py: 5,
          position: "relative",
          zIndex: 2,
          bgcolor: "rgba(255, 255, 255, 0.2)", // 🔹 Semi-transparent background
          borderRadius: "12px",
          p: 4,
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          We&apos;d love to hear from you! Let us know which program you&apos;d
          like to sign up for, along with any questions. Fill out the form below
          and we&apos;ll get back to you quickly.
        </Typography>

        {submitted ? (
          <Typography variant="h6" sx={{ color: "#ff9800", mt: 2 }}>
            ✅ Thank you! Your message has been sent.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ my: 2, bgcolor: "white", borderRadius: "5px" }}
            />
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ my: 2, bgcolor: "white", borderRadius: "5px" }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              sx={{ my: 2, bgcolor: "white", borderRadius: "5px" }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#ff9800",
                color: "white",
                "&:hover": { backgroundColor: "#e68900" },
                mt: 2,
              }}
            >
              Send Message
            </Button>
          </form>
        )}
      </Container>
    </Box>
  );
}
