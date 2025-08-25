import React, { useState, useRef, useCallback } from "react";
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
  Skeleton,
} from "@mui/material";
import { Close as CloseIcon, Star as StarIcon } from "@mui/icons-material";

// Lazy Image Component with Intersection Observer
const LazyImage = ({ src, alt, height = 250, onLoad = () => {} }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  const setRef = useCallback((node) => {
    if (imgRef.current) {
      // Cleanup previous observer
    }

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
          rootMargin: "50px", // Load 50px before entering viewport
          threshold: 0.1,
        }
      );

      observer.observe(node);

      return () => observer.unobserve(node);
    }
  }, []);

  const handleLoad = () => {
    setLoaded(true);
    onLoad();
  };

  return (
    <Box ref={setRef} sx={{ height, position: "relative" }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={height}
          animation="wave"
          sx={{ position: "absolute", top: 0, left: 0 }}
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
          onLoad={handleLoad}
          sx={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </Box>
  );
};

const ModakGallery = () => {
  const [selectedModak, setSelectedModak] = useState(null);

  const modakTypes = [
    {
      id: 1,
      name: "Ukadiche Modak",
      description: "Traditional steamed modak with coconut and jaggery filling",
      image: "/images/ukadiche-modak-cropped.jpg",
      ingredients: [
        "Fresh Coconut",
        "Organic Jaggery",
        "Rice Flour",
        "Cardamom",
      ],
      category: "Ukadiche Modak",
      rating: 5,
      schema: {
        "@type": "Product",
        name: "Ukadiche Modak",
        description:
          "Traditional steamed modak with coconut and jaggery filling",
        image: "/images/ukadiche-modak-cropped.jpg",
        offers: {
          "@type": "Offer",
          availability: "InStock",
          priceCurrency: "INR",
        },
      },
    },
    {
      id: 2,
      name: "Talniche Modak",
      description: "Deep-fried golden modak with rich coconut filling",
      image: "/images/golden-fried-modak.png",
      ingredients: ["Coconut", "Jaggery", "Wheat Flour", "Ghee"],
      category: "Talniche Modak",
      rating: 5,
      schema: {
        "@type": "Product",
        name: "Talniche Modak",
        description: "Deep-fried golden modak with rich coconut filling",
        image: "/images/golden-fried-modak.png",
        offers: {
          "@type": "Offer",
          availability: "InStock",
          priceCurrency: "INR",
        },
      },
    },
  ];

  const categories = ["All", "Ukadiche Modak", "Talniche Modak"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredModaks =
    selectedCategory === "All"
      ? modakTypes
      : modakTypes.filter((modak) => modak.category === selectedCategory);

  // Preload images for better UX
  const preloadImages = useCallback(() => {
    modakTypes.forEach((modak) => {
      const img = new Image();
      img.src = modak.image;
    });
  }, []);

  React.useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return (
    <Box
      id="gallery"
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #FFF8E7 0%, #FFFFFF 100%)",
      }}
    >
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Samidha's Modak Collection",
            description: "Handcrafted modaks blessed with tradition",
            itemListElement: modakTypes.map((modak, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@context": "https://schema.org",
                ...modak.schema,
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

            {/* Category Filter with improved accessibility */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
              }}
              role="tablist"
              aria-label="Modak category filters"
            >
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "filled" : "outlined"
                  }
                  role="tab"
                  aria-selected={selectedCategory === category}
                  tabIndex={0}
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
                    "&:focus": {
                      outline: "2px solid #7E2C3A",
                      outlineOffset: "2px",
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
                    "&:focus-within": {
                      outline: "2px solid #7E2C3A",
                      outlineOffset: "2px",
                    },
                  }}
                  onClick={() => setSelectedModak(modak)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedModak(modak);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${modak.name}`}
                >
                  {/* Optimized lazy-loaded image */}
                  <LazyImage
                    src={modak.image}
                    alt={`${modak.name} - ${modak.description}`}
                    height={250}
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
                      <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        role="img"
                        aria-label={`${modak.rating} star rating`}
                      >
                        {[...Array(modak.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            sx={{ color: "#F4C842", fontSize: 16 }}
                            aria-hidden="true"
                          />
                        ))}
                      </Box>
                    </Box>
                    <Typography
                      component="h3"
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

        {/* Enhanced Modal with better accessibility */}
        <Dialog
          open={!!selectedModak}
          onClose={() => setSelectedModak(null)}
          maxWidth="md"
          fullWidth
          aria-labelledby="modak-dialog-title"
          aria-describedby="modak-dialog-description"
        >
          {selectedModak && (
            <>
              <DialogTitle
                id="modak-dialog-title"
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
                <IconButton
                  onClick={() => setSelectedModak(null)}
                  aria-label="Close dialog"
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent id="modak-dialog-description">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <img
                      src={selectedModak.image}
                      alt={`${selectedModak.name} - ${selectedModak.description}`}
                      style={{
                        width: "100%",
                        borderRadius: 8,
                        height: "auto",
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {selectedModak.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#7E2C3A", mb: 2 }}
                      component="h4"
                    >
                      Ingredients:
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                      role="list"
                      aria-label="Ingredients list"
                    >
                      {selectedModak.ingredients.map((ingredient, index) => (
                        <Chip
                          key={index}
                          label={ingredient}
                          variant="outlined"
                          sx={{ borderColor: "#F4C842", color: "#7E2C3A" }}
                          role="listitem"
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
