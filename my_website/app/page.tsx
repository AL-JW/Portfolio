import { GitHub, LinkedIn } from "@mui/icons-material";
import { Typography, Box, IconButton } from "@mui/material";
import Link from "next/link";
import { dancingScript, greatvibes, poppins } from "./layout"; // Import fonts

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // background: "linear-gradient(to bottom, #102A43, #243B55)", // ✅ Adds subtle warmth with deep purple tones
        // background: "linear-gradient(to bottom, #1A2A6C, #355C7D)", // ✅ royal blue
        background: "linear-gradient(to bottom, #0D1B2A, #1B263B)", // Midnight saphire
        // background: "linear-gradient(to bottom, #003973, #005C97)", // Electric blue

        color: "white",
      }}
    >
      {/* ✅ Shadow Box Around Content */}
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.15)", // ✅ Slightly more visible
          padding: "3rem",
          borderRadius: "15px",
          boxShadow: "0px 15px 40px rgba(173, 216, 230, 0.4)", // ✅ Brighter light blue glow
          backdropFilter: "blur(14px)", // ✅ More glass effect
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontFamily: greatvibes.style.fontFamily, color: "#C9A34C" }}
          className="text-4xl sm:text-5xl md:text-6xl"
        >
          Alexander W.
        </Typography>
        <Box
          sx={{
            width: "50%", // ✅ Adjusts automatically
            height: "4px",
            backgroundColor: "#B8975F", // ✅ Soft Gold Line
            margin: "10px auto",
            borderRadius: "2px",
          }}
        />
        <Typography
          variant="h5"
          sx={{ fontFamily: poppins.style.fontFamily }}
          className="mt-2 text-gray-400"
        >
          Web Developer | Software Engineer
        </Typography>

        {/* ✅ GitHub & LinkedIn Icons */}
        <Box sx={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          <Link href="https://github.com/AL-JW/" target="_blank">
            <IconButton
              sx={{
                color: "white",
                fontSize: "2rem",
                transition: "transform 0.2s, color 0.2s",
                "&:hover": {
                  color: "#0077b5", // Github hover color
                  transform: "scale(1.2)", // Slightly increase the size
                },
              }}
            >
              <GitHub sx={{ fontSize: 40 }} />
            </IconButton>
          </Link>
          {/* LinkedIn Icon with hover effect */}
          <Link
            href="https://linkedin.com/in/alexander-woynich-334b2a217/"
            target="_blank"
          >
            <IconButton
              sx={{
                color: "white",
                fontSize: "2rem",
                transition: "transform 0.2s, color 0.2s",
                "&:hover": {
                  color: "#0077b5", // Official blue color
                  transform: "scale(1.2)", // Slightly increase the size
                },
              }}
            >
              <LinkedIn sx={{ fontSize: 40 }} />
            </IconButton>
          </Link>
        </Box>
      </Box>

      {/* ✅ Footer Using MUI's sx */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: dancingScript.style.fontFamily,
          position: "absolute",
          bottom: 16,
          color: "gray",
          fontStyle: "italic",
          fontSize: "1.25rem",
        }}
      >
        Developed using <span style={{ color: "#22c55e" }}>Next.js</span>
      </Typography>
    </Box>
  );
}
