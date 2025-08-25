import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Fade,
} from "@mui/material";
import EcoIcon from "@mui/icons-material/EmojiNature";
import FloristIcon from "@mui/icons-material/LocalFlorist";
import GrainIcon from "@mui/icons-material/Agriculture";
import SpaIcon from "@mui/icons-material/Spa";
import WaterIcon from "@mui/icons-material/Opacity"; // instead of Water
import StarIcon from "@mui/icons-material/Star";

const IngredientsSection = () => {
  // const ingredients = [
  //   {
  //     name: "Organic Jaggery",
  //     description:
  //       "Pure, unrefined sweetener rich in minerals and natural goodness",
  //     icon: <GrainIcon />,
  //     benefits: ["Natural Energy", "Rich in Iron", "Digestive Health"],
  //     color: "#E88B0A",
  //   },
  //   {
  //     name: "Fresh Coconut",
  //     description:
  //       "Hand-picked coconuts providing natural sweetness and healthy fats",
  //     icon: <EcoIcon />,
  //     benefits: ["Healthy Fats", "Natural Fiber", "Electrolytes"],
  //     color: "#1F6F8B",
  //   },
  //   {
  //     name: "Cardamom",
  //     description:
  //       "Premium green cardamom for aromatic flavor and digestive benefits",
  //     icon: <FloristIcon />,
  //     benefits: ["Digestive Aid", "Aromatic", "Antioxidants"],
  //     color: "#7E2C3A",
  //   },
  //   {
  //     name: "Ashwagandha",
  //     description: "Ancient Ayurvedic herb for wellness and stress relief",
  //     icon: <SpaIcon />,
  //     benefits: ["Stress Relief", "Immunity Boost", "Energy"],
  //     color: "#F4C842",
  //   },
  //   {
  //     name: "Pure Ghee",
  //     description: "Traditional clarified butter for rich flavor and nutrition",
  //     icon: <WaterIcon />,
  //     benefits: ["Healthy Fats", "Vitamin A", "Flavor Enhancement"],
  //     color: "#E88B0A",
  //   },
  //   {
  //     name: "Saffron",
  //     description: "Premium saffron threads for luxury taste and golden color",
  //     icon: <StarIcon />,
  //     benefits: ["Antioxidants", "Mood Enhancement", "Premium Flavor"],
  //     color: "#F4C842",
  //   },
  // ];

  const ingredients = [
    {
      name: "Organic Jaggery",
      description:
        "Pure, unrefined sweetener rich in minerals and natural goodness",
      icon: <GrainIcon />,
      benefits: ["Natural Energy", "Rich in Iron", "Digestive Health"],
      color: "#E88B0A",
    },
    {
      name: "Fresh Coconut",
      description:
        "Hand-picked coconuts providing natural sweetness and healthy fats",
      icon: <EcoIcon />,
      benefits: ["Healthy Fats", "Natural Fiber", "Electrolytes"],
      color: "#1F6F8B",
    },
    {
      name: "Rice",
      description:
        "Premium Ambe Mohar and Basmati varieties, directly sourced from trusted local farmers",
      icon: <GrainIcon />,
      benefits: ["Natural Aroma", "Easily Digestible", "Farm Fresh"],
      color: "#A0522D",
    },
    {
      name: "Wheat",
      description:
        "Wholesome Lokwan wheat, handpicked from local farmers for unmatched purity and quality",
      icon: <EcoIcon />,
      benefits: ["Rich in Fiber", "Sustained Energy", "Farm Fresh"],
      color: "#CD853F",
    },
    {
      name: "Cardamom",
      description:
        "Premium green cardamom for aromatic flavor and digestive benefits",
      icon: <FloristIcon />,
      benefits: ["Digestive Aid", "Aromatic", "Antioxidants"],
      color: "#7E2C3A",
    },
    {
      name: "Nutmeg",
      description:
        "Aromatic spice known for enhancing digestion and promoting relaxation",
      icon: <SpaIcon />,
      benefits: ["Digestion Support", "Better Sleep", "Stress Relief"],
      color: "#F4C842",
    },
    {
      name: "Pure Ghee",
      description: "Traditional clarified butter for rich flavor and nutrition",
      icon: <WaterIcon />,
      benefits: ["Healthy Fats", "Vitamin A", "Flavor Enhancement"],
      color: "#E88B0A",
    },
    {
      name: "Saffron",
      description: "Premium saffron threads for luxury taste and golden color",
      icon: <StarIcon />,
      benefits: ["Antioxidants", "Mood Enhancement", "Premium Flavor"],
      color: "#F4C842",
    },
  ];

  return (
    <Box
      id="ingredients"
      sx={{
        py: 8,
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FFF8E7 50%, #FFFFFF 100%)",
        position: "relative",
      }}
    >
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "2rem",
          opacity: 0.1,
        }}
      >
        🌿
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          fontSize: "2rem",
          opacity: 0.1,
        }}
      >
        🥥
      </Box>

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
              Premium Ingredients
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Every modak is crafted with the finest ingredients, combining
              traditional wisdom with modern wellness benefits for a truly
              divine experience.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {ingredients.map((ingredient, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in timeout={1000 + index * 150}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #FFF8E7 100%)",
                    border: `2px solid ${ingredient.color}20`,
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 24px ${ingredient.color}30`,
                      borderColor: `${ingredient.color}40`,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: ingredient.color,
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 3,
                      fontSize: "2rem",
                    }}
                  >
                    {ingredient.icon}
                  </Avatar>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#7E2C3A",
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {ingredient.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666",
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {ingredient.description}
                  </Typography>

                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: ingredient.color,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Health Benefits:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        justifyContent: "center",
                      }}
                    >
                      {ingredient.benefits.map((benefit, benefitIndex) => (
                        <Box
                          key={benefitIndex}
                          sx={{
                            bgcolor: `${ingredient.color}15`,
                            color: ingredient.color,
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: "0.875rem",
                            fontWeight: 500,
                          }}
                        >
                          {benefit}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        <Fade in timeout={2000}>
          <Box
            sx={{
              mt: 6,
              p: 4,
              background: "linear-gradient(135deg, #F4C842 0%, #E88B0A 100%)",
              borderRadius: 4,
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              Crafted with Love & Tradition
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Each ingredient is carefully selected and blessed according to
              ancient traditions, ensuring every bite carries the essence of
              devotion and purity.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default IngredientsSection;
