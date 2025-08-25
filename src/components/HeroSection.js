import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Fade,
} from "@mui/material";
import {
  PlayArrow as PlayIcon,
  Explore as ExploreIcon,
} from "@mui/icons-material";

const HeroSection = () => {
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
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="../images/Ukadiche-modak-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to dim the video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 248, 231, 0.65)", // light overlay to keep text visible
          zIndex: -1,
        }}
      />

      {/* Decorative Elements (can show only on mobile if needed) */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          fontSize: "4rem",
          opacity: 0.1,
          transform: "rotate(15deg)",
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
        }}
      >
        🐘
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#7E2C3A",
                    mb: 2,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  Samidha's Divine Delights
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#7E2C3A",
                    mb: 3,
                    fontWeight: 400,
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
                <CardMedia
                  component="img"
                  height="400"
                  image="/images/ukadiche-modak-cropped.jpg"
                  alt="Divine Modak"
                />
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
