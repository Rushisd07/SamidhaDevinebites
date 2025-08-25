import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  LinearProgress,
  Fade,
} from "@mui/material";
import {
  Timer as TimerIcon,
  Celebration as CelebrationIcon,
} from "@mui/icons-material";

const SeasonalSection = () => {
  // Calculate days until next Ganesh Chaturthi (example: August 31, 2024)
  const ganeshChaturthi = new Date("2025-08-27");
  const today = new Date();
  const daysUntil = Math.ceil(
    (ganeshChaturthi - today) / (1000 * 60 * 60 * 24)
  );
  const progressValue = Math.max(
    0,
    Math.min(100, ((365 - daysUntil) / 365) * 100)
  );

  const festivals = [
    {
      name: "Ganesh Chaturthi",
      date: "August 27, 2025",
      description: "The grand celebration of Lord Ganesha with Modak offerings",
      image: "./images/ganesh-chaturthi-modak.png",
      specialOffer: "Modak Special Pack",
      status: "upcoming",
    },
    {
      name: "Sankashti Chaturthi",
      date: "Monthly",
      description: "Monthly fasting day dedicated to Lord Ganesha",
      image: "./images/sankashti-ganesha-moon.png",
      specialOffer: "Mini Modak Set (108 pieces)",
      status: "recurring",
    },
    {
      name: "Maghi Ganesh Jayanti",
      date: "January 2025",
      description: "Birth celebration of Lord Ganesha in winter",
      image: "./images/winter-ganesh-celebration.png",
      specialOffer: "Winter Special Modak",
      status: "seasonal",
    },
  ];

  const ritualGuide = [
    {
      step: 1,
      title: "Preparation",
      description: "Clean the puja area and arrange modaks on a banana leaf",
      icon: "🧹",
    },
    {
      step: 2,
      title: "Invocation",
      description: 'Chant "Vakratunda Mahakaya" and invite Lord Ganesha',
      icon: "🕉️",
    },
    {
      step: 3,
      title: "Offering",
      description: "Present the modaks with devotion and gratitude",
      icon: "🙏",
    },
    {
      step: 4,
      title: "Prasad",
      description: "Distribute the blessed modaks as prasad to family",
      icon: "🎁",
    },
  ];

  return (
    <Box
      id="festivals"
      sx={{
        py: 8,
        background:
          "linear-gradient(180deg, #FFF8E7 0%, #FFFFFF 50%, #FFF8E7 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                color: "#7E2C3A",
                mb: 2,
                fontWeight: 700,
              }}
            >
              Festival Calendar & Rituals
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "700px",
                mx: "auto",
                mb: 4,
              }}
            >
              Celebrate the divine festivals with traditional modak offerings
              and sacred rituals
            </Typography>
          </Box>
        </Fade>

        {/* Countdown to Ganesh Chaturthi */}
        <Fade in timeout={1200}>
          <Card
            sx={{
              mb: 6,
              p: 4,
              background: "linear-gradient(135deg, #7E2C3A 0%, #F4C842 100%)",
              color: "white",
              textAlign: "center",
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <TimerIcon sx={{ mr: 1, fontSize: "2rem" }} />
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Ganesh Chaturthi Countdown
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              {daysUntil > 0 ? `${daysUntil} Days` : "Today!"}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: "rgba(255,255,255,0.3)",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "white",
                },
              }}
            />
            <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
              Get ready for the grand celebration with our special Modak
              collection!
            </Typography>
          </Card>
        </Fade>

        {/* Festival Cards */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {festivals.map((festival, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={festival.image}
                    alt={festival.name}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Chip
                        label={festival.status}
                        size="small"
                        sx={{
                          bgcolor:
                            festival.status === "upcoming"
                              ? "#F4C842"
                              : festival.status === "recurring"
                              ? "#1F6F8B"
                              : "#7E2C3A",
                          color: "white",
                          fontWeight: 600,
                        }}
                      />
                      <Typography variant="caption" sx={{ color: "#666" }}>
                        {festival.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#7E2C3A", fontWeight: 600, mb: 1 }}
                    >
                      {festival.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                      {festival.description}
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "#FFF8E7",
                        p: 2,
                        borderRadius: 2,
                        border: "1px solid #F4C842",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7E2C3A", fontWeight: 600 }}
                      >
                        Special Offering:
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {festival.specialOffer}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Ritual Guide */}
        <Fade in timeout={1500}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#7E2C3A",
                mb: 4,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Modak Ritual Guide
            </Typography>
            <Grid container spacing={3}>
              {ritualGuide.map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      textAlign: "center",
                      height: "100%",
                      background:
                        "linear-gradient(135deg, #FFFFFF 0%, #FFF8E7 100%)",
                      border: "2px solid #F4C842",
                      borderRadius: 4,
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "3rem",
                        mb: 2,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#7E2C3A",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Step {step.step}: {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        <Fade in timeout={2000}>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<CelebrationIcon />}
              sx={{
                background: "linear-gradient(45deg, #7E2C3A 30%, #F4C842 90%)",
                px: 4,
                py: 2,
                fontSize: "1.1rem",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #6B2532 30%, #E88B0A 90%)",
                },
              }}
            >
              Order Festival Special Pack
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default SeasonalSection;
