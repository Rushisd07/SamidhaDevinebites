import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  PhotoLibrary as GalleryIcon,
  Restaurant as RestaurantIcon,
  Event as EventIcon,
  Build as BuildIcon,
} from "@mui/icons-material";

const Footer = () => {
  const quickLinks = [
    { text: "Home", icon: <HomeIcon />, href: "#home" },
    { text: "Our Story", icon: <InfoIcon />, href: "#story" },
    { text: "Modak Gallery", icon: <GalleryIcon />, href: "#gallery" },
    { text: "Ingredients", icon: <RestaurantIcon />, href: "#ingredients" },
    { text: "Festivals", icon: <EventIcon />, href: "#festivals" },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/samidha_divinebites/",
      label: "Instagram",
    },
    { icon: <TwitterIcon />, href: "#", label: "Twitter" },
    { icon: <YouTubeIcon />, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: <PhoneIcon />, text: "+91 9175156569", href: "tel:+919175156569" },
    {
      icon: <EmailIcon />,
      text: "samidhadivinebites@gmail.com",
      href: "mailto:samidhadivinebites@gmail.com",
    },
    { icon: <LocationIcon />, text: "Pune, Maharashtra, India", href: "#" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #7E2C3A 0%, #1F6F8B 100%)",
        color: "white",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                component="img"
                src="/images/SamidhaLogo.jpg"
                alt="Samidha Logo"
                sx={{
                  height: 58,
                  width: 58,
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

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Celebrating the sacred tradition of offering Modaks to Lord
              Ganesha. Handcrafted with devotion, blessed with tradition, and
              made with the finest ingredients.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.2)",
                      transform: "translateY(-2px)",
                    },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "#F4C842",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    opacity: 0.9,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                      color: "#F4C842",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Box sx={{ fontSize: "1rem" }}>{link.icon}</Box>
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "#F4C842",
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {contactInfo.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    opacity: 0.9,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                      color: "#F4C842",
                    },
                  }}
                >
                  <Box sx={{ fontSize: "1.2rem" }}>{contact.icon}</Box>
                  <Typography variant="body2">{contact.text}</Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Festival Hours */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "#F4C842",
              }}
            >
              Festival Hours
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                <strong>Ganesh Chaturthi:</strong>
                <br />
                24/7 Service
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                <strong>Regular Days:</strong>
                <br />
                6:00 AM - 10:00 PM
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                <strong>Sankashti:</strong>
                <br />
                5:00 AM - 11:00 PM
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.2)" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 Samidha Devinebites. All rights reserved. Made with ❤️ and
            devotion.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              fontStyle: "italic",
              color: "#F4C842",
              textAlign: "center",
            }}
          >
            "Aapki Shraddha aur Modakpriya Ganesh ji ka Ashirwad!"
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
