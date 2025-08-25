import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Fade,
} from "@mui/material";
import { FormatQuote as QuoteIcon } from "@mui/icons-material";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ashwini gophan",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The joy of offering these divine modaks to Ganpati Bappa made our celebration truly magical. The taste and quality exceeded all expectations!",
      avatar: "./reviews/Ashwini.jpg",
      festival: "Ganesh Chaturthi 2024",
    },
    {
      name: "Gaurav Badgujar",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Every bite of these modaks reminded me of my grandmother's recipes. The traditional flavors combined with premium ingredients create pure bliss.",
      avatar: "./reviews/Gaurav.jpg",
      festival: "Sankashti Chaturthi",
    },
    {
      name: "Rushi Dudhane",
      location: "Kolhapur, Maharashtra",
      rating: 5,
      text: "The modak tradition became even more special with these beautifully crafted sweets. Our entire family was blessed with joy and prosperity.",
      avatar: "./reviews/Rushya.jpg",
      festival: "Ganesh Chaturthi 2024",
    },
    {
      name: "Abhishek Sananse",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The packaging, presentation, and most importantly the taste - everything was perfect. These modaks truly carry the essence of devotion.",
      avatar: "./reviews/Abhi.jpg",
      festival: "Maghi Ganesh Jayanti",
    },
    {
      name: "Namrata Jagtap",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "These modaks brought back the festive charm of my childhood. Soft texture, authentic taste, and pure devotion in every bite.",
      avatar: "./reviews/Namrata.jpg",
      festival: "Ganesh Chaturthi 2024",
    },
    {
      name: "Aishwarya Kulkarni",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "I loved how fresh and perfectly balanced these modaks were. They made our family celebration more joyful and memorable.",
      avatar: "./reviews/Aishwarya.jpg",
      festival: "Sankashti Chaturthi",
    },
  ];

  return (
    <Box
      id="reviews"
      sx={{
        py: 8,
        background:
          "linear-gradient(180deg, #FFF8E7 0%, #FFFFFF 50%, #FFF8E7 100%)",
        position: "relative",
      }}
    >
      {/* Decorative Quote Icons */}
      <QuoteIcon
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "4rem",
          color: "#F4C842",
          opacity: 0.1,
          transform: "rotate(-15deg)",
        }}
      />
      <QuoteIcon
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          fontSize: "4rem",
          color: "#7E2C3A",
          opacity: 0.1,
          transform: "rotate(15deg) scaleX(-1)",
        }}
      />

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
              Devotee Experiences
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                maxWidth: "700px",
                mx: "auto",
                mb: 2,
              }}
            >
              Hear from our blessed community about their divine modak
              experiences
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Rating value={5} readOnly sx={{ color: "#F4C842" }} />
              <Typography
                variant="body1"
                sx={{ color: "#666", fontWeight: 600 }}
              >
                4.9/5 from 200+ devotees
              </Typography>
            </Box>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Fade in timeout={1000 + index * 150}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #FFF8E7 100%)",
                    border: "1px solid rgba(244, 200, 66, 0.2)",
                    borderRadius: 4,
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                      borderColor: "rgba(244, 200, 66, 0.4)",
                    },
                  }}
                >
                  {/* Quote Icon */}
                  <QuoteIcon
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      color: "#F4C842",
                      opacity: 0.3,
                      fontSize: "2rem",
                    }}
                  />

                  <CardContent sx={{ p: 0 }}>
                    {/* Rating */}
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ color: "#F4C842", mb: 2 }}
                    />

                    {/* Testimonial Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontStyle: "italic",
                        lineHeight: 1.6,
                        mb: 3,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>

                    {/* User Info */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#7E2C3A",
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            mb: 0.5,
                          }}
                        >
                          {testimonial.location}
                        </Typography>
                        <Box
                          sx={{
                            bgcolor: "#F4C842",
                            color: "#7E2C3A",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            display: "inline-block",
                          }}
                        >
                          {testimonial.festival}
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
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
              background: "linear-gradient(135deg, #7E2C3A 0%, #1F6F8B 100%)",
              borderRadius: 4,
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              Join Our Blessed Community
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
              Share your Samidha's Divinebites modak experience and inspire
              fellow devotees
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, color: "#F4C842" }}
                >
                  200+
                </Typography>
                <Typography variant="body1">Happy Devotees</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, color: "#F4C842" }}
                >
                  5000+
                </Typography>
                <Typography variant="body1">Modaks Blessed</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, color: "#F4C842" }}
                >
                  10+
                </Typography>
                <Typography variant="body1">Cities Served</Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
