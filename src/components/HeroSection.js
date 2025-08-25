import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Fade,
  Skeleton,
} from "@mui/material";
import {
  PlayArrow as PlayIcon,
  Explore as ExploreIcon,
} from "@mui/icons-material";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Preload critical images
  useEffect(() => {
    const img = new Image();
    img.src = "/images/ukadiche-modak-cropped.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        pt: 8,
        overflow: "hidden",
      }}
    >
      {/* Optimized Background Video with Intersection Observer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata" // Only load metadata initially
        onLoadedData={() => setVideoLoaded(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
          opacity: videoLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <source src="/images/Ukadiche-modak-video.mp4" type="video/mp4" />
        {/* Fallback image for unsupported browsers */}
        <img
          src="/images/ukadiche-modak-cropped.jpg"
          alt="Modak Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </video>

      {/* Static background fallback */}
      {!videoLoaded && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/ukadiche-modak-cropped.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2,
          }}
        />
      )}

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 248, 231, 0.65)",
          zIndex: -1,
        }}
      />

      {/* Decorative Elements - Only show after content loads */}
      {imageLoaded && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "10%",
              fontSize: "4rem",
              opacity: 0.1,
              transform: "rotate(15deg)",
              display: { xs: "none", md: "block" },
            }}
          >
            🕉️
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              fontSize: "3rem",
              opacity: 0.1,
              transform: "rotate(-15deg)",
              display: { xs: "none", md: "block" },
            }}
          >
            🐘
          </Box>
        </>
      )}

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                {/* SEO optimized headings with proper hierarchy */}
                <Typography
                  component="h1"
                  variant="h1"
                  sx={{
                    color: "#7E2C3A",
                    mb: 2,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Samidha's Divine Delights
                </Typography>
                <Typography
                  component="h2"
                  variant="h3"
                  sx={{
                    color: "#7E2C3A",
                    mb: 3,
                    fontWeight: 400,
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                  }}
                >
                  Celebrating Modak for Ganpati
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#444",
                    mb: 4,
                    lineHeight: 1.6,
                    fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                >
                  Experience the sacred tradition of offering Modaks to Lord
                  Ganesha. Handcrafted with love, blessed with devotion, and
                  made with the finest ingredients.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<ExploreIcon />}
                    sx={{
                      background:
                        "linear-gradient(45deg, #7E2C3A 30%, #E88B0A 90%)",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #6B2532 30%, #D17A09 90%)",
                      },
                    }}
                    href="https://www.instagram.com/samidha_divinebites/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Explore our modak flavors on Instagram"
                  >
                    Explore Flavors
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayIcon />}
                    sx={{
                      borderColor: "#7E2C3A",
                      color: "#7E2C3A",
                      "&:hover": {
                        borderColor: "#7E2C3A",
                        backgroundColor: "rgba(126, 44, 58, 0.1)",
                      },
                    }}
                    href="https://www.instagram.com/samidha_divinebites/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch our story on Instagram"
                  >
                    Watch Story
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in timeout={1500}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  transform: "rotate(2deg)",
                  "&:hover": {
                    transform: "rotate(0deg) scale(1.02)",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                {/* Optimized image with loading states */}
                {!imageLoaded ? (
                  <Skeleton
                    variant="rectangular"
                    height={400}
                    animation="wave"
                  />
                ) : (
                  <CardMedia
                    component="img"
                    height="400"
                    image="/images/ukadiche-modak-cropped.jpg"
                    alt="Divine Ukadiche Modak - Traditional steamed modak with coconut jaggery filling"
                    loading="eager" // Load immediately for hero image
                    decoding="async"
                    sx={{
                      transition: "opacity 0.3s ease",
                      opacity: imageLoaded ? 1 : 0,
                    }}
                  />
                )}
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
