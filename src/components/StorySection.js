import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Fade,
} from "@mui/material";
import {
  AutoStories as StoryIcon,
  Favorite as HeartIcon,
  Star as StarIcon,
} from "@mui/icons-material";

const StorySection = () => {
  const storyPoints = [
    {
      icon: <StoryIcon />,
      title: "Sacred Legend",
      description:
        "The tradition of offering 21 Modaks to Lord Ganesha symbolizes the 21 qualities of a perfect devotee.",
    },
    {
      icon: <HeartIcon />,
      title: "Divine Love",
      description:
        "Each modak represents pure devotion and the sweet relationship between the devotee and the divine.",
    },
    {
      icon: <StarIcon />,
      title: "Spiritual Significance",
      description:
        "The number 21 represents completeness in spiritual practice and the path to enlightenment.",
    },
  ];

  return (
    <Box
      id="story"
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFF8E7 100%)",
        position: "relative",
      }}
    >
      {/* Decorative Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(244, 200, 66, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(126, 44, 58, 0.1) 0%, transparent 50%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
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
              The Sacred Story of Modaks
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Discover the divine tradition that connects millions of devotees
              to Lord Ganesha through the sacred offering of modaks during
              Ganesh Chaturthi.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {storyPoints.map((point, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #FFF8E7 100%)",
                    border: "1px solid rgba(244, 200, 66, 0.2)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#F4C842",
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {point.icon}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{ color: "#7E2C3A", mb: 2, fontWeight: 600 }}
                  >
                    {point.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", lineHeight: 1.6 }}
                  >
                    {point.description}
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        <Fade in timeout={1500}>
          <Card
            sx={{
              p: 4,
              background: "linear-gradient(135deg, #7E2C3A 0%, #1F6F8B 100%)",
              color: "white",
              textAlign: "center",
              borderRadius: 4,
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              "Modakpriya Ganadhipati"
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, fontStyle: "italic" }}>
              Lord Ganesha, the beloved of modaks, removes all obstacles and
              blesses devotees who offer these sweet delights with pure hearts
              and unwavering faith.
            </Typography>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default StorySection;
