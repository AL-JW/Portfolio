import { Container, Typography, Box, Grid, Paper } from "@mui/material";

const dogImages = [
  "/gallery/pup_1.JPG",
  "/gallery/pup_2.JPG",
  "/gallery/pup_3.JPG",
  "/gallery/pup_4.JPG",
  "/gallery/pup_5.JPG",
  "/gallery/pup_6.JPG",
  "/gallery/pup_7.JPG",
  "/gallery/pup_8.JPG",
];

export default function GalleryPage() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/pup_back_5.jpg')", // 🔹 Unique Background for Gallery
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
        maxWidth="lg"
        sx={{
          py: 5,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Page Title */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Dog Training Gallery
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          Check out our trained dogs in action!
        </Typography>

        {/* Gallery Grid */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
          {dogImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: 3,
                }}
              >
                <img
                  src={image}
                  alt={`Dog ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
