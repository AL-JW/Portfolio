// import { Container, Typography } from "@mui/material";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",

        width: "100vw",
        py: 1,
        mt: 0,
        background: "linear-gradient(90deg, #ff9800, #ff5722)", // Transparent white
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Dancing Script', cursive", // Cool cursive font
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Developed using React
      </Typography>
      <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
        © {currentYear}
      </Typography>
    </Box>
  );
}
