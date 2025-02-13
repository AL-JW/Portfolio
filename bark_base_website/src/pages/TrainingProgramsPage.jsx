import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function TrainingProgramsPage() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/pup_back_2.jpg')", // 🔹 Unique Background for Training Page
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
          Our Training Programs
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          We offer specialized training programs to help your dog become
          well-behaved and obedient.
        </Typography>

        {/* Training Programs List */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
          {[
            {
              title: "Basic Obedience",
              desc: "Teach your dog essential commands like sit, stay, and come.",
            },
            {
              title: "Behavioral Training",
              desc: "Correct common issues such as barking, jumping, and chewing.",
            },
            {
              title: "Advanced Obedience",
              desc: "Off-leash training and advanced commands for full control.",
            },
            {
              title: "Socialization Training",
              desc: "Help your dog interact positively with people and other dogs.",
            },
            {
              title: "Leash Walking",
              desc: "Teach your dog to walk calmly without pulling on the leash.",
            },
            {
              title: "Puppy Training",
              desc: "Build a strong foundation with early training for young pups.",
            },
          ].map((program) => (
            <Grid item xs={12} md={6} key={program.title}>
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
                  {program.title}
                </Typography>
                <Typography variant="body1">{program.desc}</Typography>
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
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
