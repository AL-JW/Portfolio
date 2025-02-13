import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/pup_back_1.jpg')", // 🔹 Unique Background for HomePage
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
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 5 }}>
        {/* Hero Section */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Helping dogs and their owners build strong, lasting bonds.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/about"
            sx={{
              mt: 2,
              backgroundColor: "#ff9800",
              color: "white",
              "&:hover": { backgroundColor: "#e68900" }, // 🔹 Darker orange on hover
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Services Overview */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
          {[
            {
              title: "Obedience Training",
              desc: "Basic and advanced commands.",
            },
            {
              title: "Behavior Fixes",
              desc: "Solutions for aggression, anxiety, and more.",
            },
            {
              title: "Puppy Training",
              desc: "Start your puppy off on the right paw!",
            },
          ].map((service) => (
            <Grid item xs={12} md={4} key={service.title}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "center",
                  bgcolor: "#f5f5f5",
                  backgroundColor: "rgba(255, 255, 255, 0.3)", // Transparent white
                  borderRadius: "12px",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {service.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials Preview */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" fontWeight="bold">
            What Our Clients Say
          </Typography>
          <Typography variant="body1" color="textSecondary">
            “This training program transformed my dog’s behavior!” - Happy
            Client
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/testimonials"
            sx={{
              mt: 2,
              borderColor: "#ff5722", // 🔹 Deep Red Border
              backgroundColor: "rgba(255, 255, 255, 0.3)", // Transparent white
            }}
          >
            Read More
          </Button>
        </Box>

        {/* Call to Action */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h5" fontWeight="bold">
            Ready to Train Your Dog?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
            sx={{
              mt: 2,
              backgroundColor: "#ff5722", // 🔹 Deep Red (Matches Navbar)
              color: "white",
              "&:hover": { backgroundColor: "#e64a19" }, // 🔹 Slightly darker red on hover
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
