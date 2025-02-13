import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function TestimonialsPage() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/pup_back_3.jpg')", // 🔹 Unique Background for Testimonials
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
      {/* 🔹 Overlay to Improve Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ Dark overlay for text visibility
          zIndex: 1,
        }}
      />

      {/* 🔹 Content Container */}
      <Container
        maxWidth="md"
        sx={{
          py: 5,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Page Title */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          What Our Clients Say
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          Real stories from happy clients and their well-trained dogs!
        </Typography>

        {/* Testimonials List */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
          {[
            {
              name: "Sarah & Max",
              review:
                "This training program completely changed Max's behavior! He's now obedient and calm on walks.",
            },
            {
              name: "Mike & Bella",
              review:
                "I was struggling with Bella's leash pulling, but after a few sessions, she walks perfectly by my side!",
            },
            {
              name: "Emily & Rocky",
              review:
                "Rocky was very anxious around other dogs, but the socialization training helped him become more confident.",
            },
            {
              name: "David & Luna",
              review:
                "Luna's recall training was a game changer! She comes back immediately when I call her.",
            },
          ].map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "center",
                  bgcolor: "rgba(255, 255, 255, 0.3)", // ✅ Semi-transparent background
                  borderRadius: "12px",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {testimonial.name}
                </Typography>
                <Typography variant="body1">
                  &quot;{testimonial.review}&quot;
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ my: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff9800", // ✅ Themed color
              color: "white",
              "&:hover": { backgroundColor: "#e68900" },
            }}
            component={Link}
            to="/contact"
          >
            Train Your Dog Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
