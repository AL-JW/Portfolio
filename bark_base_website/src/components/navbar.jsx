import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(90deg, #ff9800, #ff5722)",
        width: "100vw",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ position: "relative", width: "100%" }}>
          {/* Centered Title */}
          <Typography
            variant="h6"
            component={Link} // ✅ Make it a clickable link
            to="/" // ✅ Navigates to the homepage
            sx={{
              fontWeight: "bold",
              position: "absolute",
              left: "50%",
              color: "inherit", // ✅ Keeps the same color as before
              transform: "translateX(-50%)", // Centers text dynamically
              fontSize: { xs: "1rem", sm: "1.25rem" }, // Smaller text on mobile
            }}
          >
            Dog Training Academy
          </Typography>

          {/* Hamburger Menu Button on the Right */}
          <Box sx={{ marginLeft: "auto" }}>
            <IconButton sx={{ color: "white" }} onClick={toggleMenu}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Sidebar Menu (Drawer) */}
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={toggleMenu}
          sx={{
            "& .MuiDrawer-paper": { width: "250px", background: "#222" },
          }}
        >
          <List>
            {[
              { text: "Home", path: "/" },
              { text: "About", path: "/about" },
              { text: "Services", path: "/services" },
              { text: "Training", path: "/training-programs" },
              { text: "Testimonials", path: "/testimonials" },
              { text: "Gallery", path: "/gallery" },
              { text: "Contact", path: "/contact" },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={toggleMenu}
                  sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    padding: "12px 20px",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#ff5722", // Orange highlight on hover
                      color: "#fff",
                      transform: "scale(1.05)", // Slight pop effect
                    },
                  }}
                >
                  <ListItemText primary={item.text} sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
}
