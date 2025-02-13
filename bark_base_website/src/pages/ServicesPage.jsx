import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/pup_back_3.jpg')", // 🔹 Unique Services Page Background
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
      {/* ✅ Overlay to Improve Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 🔹 Dark overlay for readability
          zIndex: 1,
        }}
      />

      {/* ✅ Content Container (Above the Overlay) */}
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
          Our Services
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          Explore our specialized training programs tailored for your dog’s
          needs.
        </Typography>

        {/* Services List */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
          {[
            {
              title: "Obedience Training",
              desc: "Learn basic and advanced commands for a well-behaved dog.",
            },
            {
              title: "Behavior Modification",
              desc: "We address aggression, anxiety, and unwanted behaviors.",
            },
            {
              title: "Puppy Training",
              desc: "Start your puppy off right with foundational skills.",
            },
            {
              title: "Leash Training",
              desc: "Teach your dog to walk calmly on a leash without pulling.",
            },
            {
              title: "Advanced Training",
              desc: "Specialized programs for agility, tricks, and service dogs.",
            },
          ].map((service) => (
            <Grid item xs={12} md={6} key={service.title}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "center",
                  bgcolor: "rgba(255, 255, 255, 0.3)", // 🔹 Semi-transparent box
                  borderRadius: "12px",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ my: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff5722", // 🔹 Themed deep red color
              color: "white",
              "&:hover": { backgroundColor: "#e64a19" },
            }}
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
