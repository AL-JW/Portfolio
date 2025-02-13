import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Box
      sx={{
        position: "relative", // ✅ Ensures child elements are positioned correctly
        backgroundImage: "url('/pup_back_4.jpg')", // ✅ Background image
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
        paddingTop: "64px", // ✅ Accounts for fixed navbar
      }}
    >
      {/* ✅ Overlay Box (for better readability) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ Dark overlay (adjust opacity as needed)
          zIndex: 1, // ✅ Places overlay above background but below content
        }}
      />

      {/* ✅ Content Box (placed above the overlay) */}
      <Container
        maxWidth="md"
        sx={{
          py: 5,
          position: "relative",
          zIndex: 2, // ✅ Ensures content stays above the overlay
        }}
      >
        {/* About Page Title */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          We are dedicated to helping dogs and their owners build strong,
          lasting relationships.
        </Typography>

        {/* About Content (Two Columns) */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                bgcolor: "rgba(255, 255, 255, 0.3)", // ✅ Slightly transparent white
                borderRadius: "12px",
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Our Mission
              </Typography>
              <Typography variant="body1">
                We provide high-quality, personalized dog training services to
                ensure happy and well-behaved pets.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                bgcolor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Why Choose Us?
              </Typography>
              <Typography variant="body1">
                With years of experience, we tailor each training program to
                meet your dog&apos;s needs.
              </Typography>
            </Paper>
          </Grid>
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
            to="/services"
          >
            View Our Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
