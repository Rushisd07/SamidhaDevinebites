"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  PhotoLibrary as GalleryIcon,
  Restaurant as RestaurantIcon,
  Event as EventIcon,
  Build as BuildIcon,
  Reviews as ReviewsIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

// import your logo
// import SamidhaLogo from "../../public/images/SamidhaLogo.jpg"; // adjust path

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, href: "#home" },
    { text: "Story", icon: <InfoIcon />, href: "#story" },
    { text: "Gallery", icon: <GalleryIcon />, href: "#gallery" },
    { text: "Ingredients", icon: <RestaurantIcon />, href: "#ingredients" },
    { text: "Festivals", icon: <EventIcon />, href: "#festivals" },
    { text: "Reviews", icon: <ReviewsIcon />, href: "#reviews" },
    { text: "Newsletter", icon: <EmailIcon />, href: "#newsletter" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(135deg, #7E2C3A 0%, #F4C842 50%, #E76F51 100%)", // logo-inspired gradient
          boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo + Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src="/images/SamidhaLogo.jpg"
              alt="Samidha Logo"
              sx={{
                height: 48,
                width: 48,
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                backgroundColor: "white",
                p: 0.5,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#fff",
                textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
                letterSpacing: "1px",
              }}
            >
              Samidha Divinebites
            </Typography>
          </Box>

          {/* Menu Items */}
          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{ color: "white" }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Buttons only on desktop */}
              {menuItems.slice(0, 6).map((item) => (
                <Button
                  key={item.text}
                  href={item.href}
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": {
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile (only show on mobile) */}
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
            sx={{
              width: 250,
              pt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Logo at top center */}
            <Box
              component="img"
              src="/images/SamidhaLogo.jpg"
              alt="Samidha Logo"
              sx={{
                height: 80,
                width: 80,
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                backgroundColor: "white",
                p: 1,
                mb: 2,
              }}
            />

            {/* App name under logo */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#7E2C3A",
              }}
            >
              Samidha Divinebites
            </Typography>

            {/* Menu Items */}
            <List sx={{ width: "100%" }}>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component="a"
                  href={item.href}
                  sx={{
                    "&:hover": { backgroundColor: "rgba(126,44,58,0.08)" },
                  }}
                >
                  <Box sx={{ mr: 2, color: "#7E2C3A" }}>{item.icon}</Box>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Header;
