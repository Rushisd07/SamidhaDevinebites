"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Fade,
} from "@mui/material";
import { Close as CloseIcon, Star as StarIcon } from "@mui/icons-material";

const ModakGallery = () => {
  const [selectedModak, setSelectedModak] = useState(null);

  const modakTypes = [
    {
      id: 1,
      name: "Ukadiche Modak",
      description: "Traditional steamed modak with coconut and jaggery filling",
      image: "./images/ukadiche-modak.jpg",
      ingredients: [
        "Fresh Coconut",
        "Organic Jaggery",
        "Rice Flour",
        "Cardamom",
      ],
      category: "Ukadiche Modak",
      rating: 5,
    },
    {
      id: 2,
      name: "Talniche Modak",
      description: "Deep-fried golden modak with rich coconut filling",
      image: "./images/golden-fried-modak.png",
      ingredients: ["Coconut", "Jaggery", "Wheat Flour", "Ghee"],
      category: "Talniche Modak",
      rating: 5,
    },
  ];

  const categories = ["All", "Ukadiche Modak", "Talniche Modak"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredModaks =
    selectedCategory === "All"
      ? modakTypes
      : modakTypes.filter((modak) => modak.category === selectedCategory);

  return (
    <Box
      id="gallery"
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #FFF8E7 0%, #FFFFFF 100%)",
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
              Samidha's Modak Collection
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                mb: 4,
              }}
            >
              Explore our handcrafted varieties, each blessed with tradition and
              made with love
            </Typography>

            {/* Category Filter */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
              }}
            >
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "filled" : "outlined"
                  }
                  sx={{
                    bgcolor:
                      selectedCategory === category ? "#F4C842" : "transparent",
                    color: selectedCategory === category ? "#7E2C3A" : "#666",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor:
                        selectedCategory === category
                          ? "#E88B0A"
                          : "rgba(244, 200, 66, 0.1)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {filteredModaks.map((modak, index) => (
            <Grid item xs={12} sm={6} md={4} key={modak.id}>
              <Fade in timeout={1000 + index * 100}>
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                  onClick={() => setSelectedModak(modak)}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={modak.image}
                    alt={modak.name}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Chip
                        label={modak.category}
                        size="small"
                        sx={{
                          bgcolor: "#F4C842",
                          color: "#7E2C3A",
                          fontWeight: 600,
                        }}
                      />
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {[...Array(modak.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            sx={{ color: "#F4C842", fontSize: 16 }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#7E2C3A", fontWeight: 600, mb: 1 }}
                    >
                      {modak.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      {modak.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Modak Details */}
        <Dialog
          open={!!selectedModak}
          onClose={() => setSelectedModak(null)}
          maxWidth="md"
          fullWidth
        >
          {selectedModak && (
            <>
              <DialogTitle
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#7E2C3A", fontWeight: 600 }}
                >
                  {selectedModak.name}
                </Typography>
                <IconButton onClick={() => setSelectedModak(null)}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <img
                      src={selectedModak.image || "/placeholder.svg"}
                      alt={selectedModak.name}
                      style={{ width: "100%", borderRadius: 8 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {selectedModak.description}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#7E2C3A", mb: 2 }}>
                      Ingredients:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {selectedModak.ingredients.map((ingredient, index) => (
                        <Chip
                          key={index}
                          label={ingredient}
                          variant="outlined"
                          sx={{ borderColor: "#F4C842", color: "#7E2C3A" }}
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ModakGallery;
