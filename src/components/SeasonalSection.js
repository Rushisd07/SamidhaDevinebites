import React, { useState, useRef, useCallback } from "react";
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
  Skeleton,
} from "@mui/material";
import {
  Timer as TimerIcon,
  Celebration as CelebrationIcon,
} from "@mui/icons-material";

// Lazy Image Component for festival images
const LazyCardImage = ({ src, alt, height = 200 }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  const setRef = useCallback((node) => {
    imgRef.current = node;

    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(node);
          }
        },
        {
          rootMargin: "50px",
          threshold: 0.1,
        }
      );

      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, []);

  return (
    <Box ref={setRef} sx={{ height, position: "relative" }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={height}
          animation="wave"
        />
      )}
      {inView && (
        <CardMedia
          component="img"
          height={height}
          image={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          sx={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </Box>
  );
};

const SeasonalSection = () => {
  // Calculate days until next Ganesh Chaturthi (example: August 27, 2025)
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
      id: 1,
      name: "Ganesh Chaturthi",
      date: "August 27, 2025",
      description: "The grand celebration of Lord Ganesha with Modak offerings",
      image: "/images/ganesh-chaturthi-modak.png",
      specialOffer: "Modak Special Pack",
      status: "upcoming",
      schema: {
        "@type": "Event",
        name: "Ganesh Chaturthi",
        startDate: "2025-08-27",
        description:
          "The grand celebration of Lord Ganesha with Modak offerings",
        location: {
          "@type": "Place",
          name: "Pune, Maharashtra",
        },
      },
    },
    {
      id: 2,
      name: "Sankashti Chaturthi",
      date: "Monthly",
      description: "Monthly fasting day dedicated to Lord Ganesha",
      image: "/images/sankashti-ganesha-moon.png",
      specialOffer: "Mini Modak Set (108 pieces)",
      status: "recurring",
      schema: {
        "@type": "Event",
        name: "Sankashti Chaturthi",
        description: "Monthly fasting day dedicated to Lord Ganesha",
        eventSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1M",
        },
      },
    },
    {
      id: 3,
      name: "Maghi Ganesh Jayanti",
      date: "January 2025",
      description: "Birth celebration of Lord Ganesha in winter",
      image: "/images/winter-ganesh-celebration.png",
      specialOffer: "Winter Special Modak",
      status: "seasonal",
      schema: {
        "@type": "Event",
        name: "Maghi Ganesh Jayanti",
        startDate: "2025-01-01",
        description: "Birth celebration of Lord Ganesha in winter",
      },
    },
  ];

  const ritualGuide = [
    {
      step: 1,
      title: "Preparation",
      description: "Clean the puja area and arrange modaks on a banana leaf",
      icon: "🧹",
      ariaLabel: "Step 1: Preparation with broom icon",
    },
    {
      step: 2,
      title: "Invocation",
      description: 'Chant "Vakratunda Mahakaya" and invite Lord Ganesha',
      icon: "🕉️",
      ariaLabel: "Step 2: Invocation with Om symbol",
    },
    {
      step: 3,
      title: "Offering",
      description: "Present the modaks with devotion and gratitude",
      icon: "🙏",
      ariaLabel: "Step 3: Offering with prayer hands",
    },
    {
      step: 4,
      title: "Prasad",
      description: "Distribute the blessed modaks as prasad to family",
      icon: "🎁",
      ariaLabel: "Step 4: Prasad distribution with gift icon",
    },
  ];

  // Preload festival images
  React.useEffect(() => {
    festivals.forEach((festival) => {
      const img = new Image();
      img.src = festival.image;
    });
  }, []);

  return (
    <Box
      id="festivals"
      sx={{
        py: 8,
        background:
          "linear-gradient(180deg, #FFF8E7 0%, #FFFFFF 50%, #FFF8E7 100%)",
      }}
    >
      {/* Schema.org structured data for events */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Festival Calendar",
            description: "Sacred festivals and rituals for modak offerings",
            itemListElement: festivals.map((festival, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@context": "https://schema.org",
                ...festival.schema,
              },
            })),
          }),
        }}
      />

      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={6}>
            <Typography
              component="h2"
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
            role="banner"
            aria-label={`Ganesh Chaturthi countdown: ${
              daysUntil > 0 ? `${daysUntil} days remaining` : "Today!"
            }`}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <TimerIcon sx={{ fontSize: "2rem" }} aria-hidden="true" />
              <Typography variant="h4" sx={{ fontWeight: 600 }} component="h3">
                Ganesh Chaturthi Countdown
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{ mb: 2, fontWeight: 700 }}
              aria-live="polite"
            >
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
              role="progressbar"
              aria-label={`Festival progress: ${progressValue.toFixed(
                0
              )}% of year completed`}
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
            <Grid item xs={12} md={4} key={festival.id}>
              <Fade in timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                    "&:focus-within": {
                      outline: "2px solid #7E2C3A",
                      outlineOffset: "2px",
                    },
                  }}
                  role="article"
                  aria-label={`Festival: ${festival.name}`}
                >
                  {/* Optimized lazy-loaded image */}
                  <LazyCardImage
                    src={festival.image}
                    alt={`${festival.name} - ${festival.description}`}
                    height={200}
                  />

                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                        flexWrap: "wrap",
                        gap: 1,
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
                        aria-label={`Festival status: ${festival.status}`}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: "#666" }}
                        component="time"
                      >
                        {festival.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#7E2C3A", fontWeight: 600, mb: 1 }}
                      component="h3"
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
                      role="complementary"
                      aria-label="Special offering details"
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7E2C3A", fontWeight: 600 }}
                        component="h4"
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
              component="h3"
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
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      },
                    }}
                    role="article"
                    aria-label={step.ariaLabel}
                  >
                    <Box
                      sx={{
                        fontSize: "3rem",
                        mb: 2,
                        lineHeight: 1,
                      }}
                      role="img"
                      aria-label={step.ariaLabel}
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
                      component="h4"
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
                "&:focus": {
                  outline: "2px solid #7E2C3A",
                  outlineOffset: "4px",
                },
              }}
              href="https://www.instagram.com/samidha_divinebites/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order festival special modak pack on Instagram"
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
