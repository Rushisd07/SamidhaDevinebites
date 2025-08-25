import React, { useState, useRef, useCallback } from "react";
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
  Skeleton,
} from "@mui/material";
import { FormatQuote as QuoteIcon } from "@mui/icons-material";

// Optimized Avatar Component with lazy loading
const LazyAvatar = ({ src, alt, size = 56 }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const avatarRef = useRef();

  const setRef = useCallback((node) => {
    avatarRef.current = node;

    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(node);
          }
        },
        {
          rootMargin: "100px",
          threshold: 0.1,
        }
      );

      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, []);

  return (
    <Box ref={setRef}>
      {!loaded && inView ? (
        <Skeleton variant="circular" width={size} height={size} />
      ) : (
        <Avatar
          src={inView ? src : undefined}
          alt={alt}
          sx={{ width: size, height: size }}
          onLoad={() => setLoaded(true)}
        >
          {!inView && alt.charAt(0)}
        </Avatar>
      )}
    </Box>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ashwini Gophan",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The joy of offering these divine modaks to Ganpati Bappa made our celebration truly magical. The taste and quality exceeded all expectations!",
      avatar: "/reviews/Ashwini.jpg",
      festival: "Ganesh Chaturthi 2024",
      schema: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Ashwini Gophan",
        },
        reviewBody:
          "The joy of offering these divine modaks to Ganpati Bappa made our celebration truly magical. The taste and quality exceeded all expectations!",
      },
    },
    {
      id: 2,
      name: "Gaurav Badgujar",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Every bite of these modaks reminded me of my grandmother's recipes. The traditional flavors combined with premium ingredients create pure bliss.",
      avatar: "/reviews/Gaurav.jpg",
      festival: "Sankashti Chaturthi",
      schema: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Gaurav Badgujar",
        },
        reviewBody:
          "Every bite of these modaks reminded me of my grandmother's recipes. The traditional flavors combined with premium ingredients create pure bliss.",
      },
    },
    {
      id: 3,
      name: "Rushi Dudhane",
      location: "Kolhapur, Maharashtra",
      rating: 5,
      text: "The modak tradition became even more special with these beautifully crafted sweets. Our entire family was blessed with joy and prosperity.",
      avatar: "/reviews/Rushya.jpg",
      festival: "Ganesh Chaturthi 2024",
      schema: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Rushi Dudhane",
        },
        reviewBody:
          "The modak tradition became even more special with these beautifully crafted sweets. Our entire family was blessed with joy and prosperity.",
      },
    },
    {
      id: 4,
      name: "Abhishek Sananse",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The packaging, presentation, and most importantly the taste - everything was perfect. These modaks truly carry the essence of devotion.",
      avatar: "/reviews/Abhi.jpg",
      festival: "Maghi Ganesh Jayanti",
      schema: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Abhishek Sananse",
        },
        reviewBody:
          "The packaging, presentation, and most importantly the taste - everything was perfect. These modaks truly carry the essence of devotion.",
      },
    },
    {
      id: 5,
      name: "Namrata Jagtap",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "These modaks brought back the festive charm of my childhood. Soft texture, authentic taste, and pure devotion in every bite.",
      avatar: "/reviews/Namrata.jpg",
      festival: "Ganesh Chaturthi 2024",
      schema: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Namrata Jagtap",
        },
        reviewBody:
          "These modaks brought back the festive charm of my childhood. Soft texture, authentic taste, and pure devotion in every bite.",
      },
    },
    {
      id: 6,
      name: "Aishwarya Kulkarni",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "I loved how fresh and perfectly balanced these modaks were. They made our family celebration more joyful and memorable.",
      avatar: "/reviews/Aishwarya.jpg",
      festival: "Sankashti Chaturthi",
      schema: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Aishwarya Kulkarni",
        },
        reviewBody:
          "I loved how fresh and perfectly balanced these modaks were. They made our family celebration more joyful and memorable.",
      },
    },
  ];

  // Preload avatar images
  React.useEffect(() => {
    testimonials.forEach((testimonial) => {
      const img = new Image();
      img.src = testimonial.avatar;
    });
  }, [testimonials]);

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
      {/* Schema.org structured data for reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Samidha Divinebites",
            description:
              "Traditional modak makers specializing in Ganesh Chaturthi sweets",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "200",
              bestRating: "5",
            },
            review: testimonials.map((testimonial) => testimonial.schema),
          }),
        }}
      />

      {/* Optimized decorative elements */}
      <QuoteIcon
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "4rem",
          color: "#F4C842",
          opacity: 0.1,
          transform: "rotate(-15deg)",
          display: { xs: "none", md: "block" },
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
          display: { xs: "none", md: "block" },
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
              <Rating
                value={5}
                readOnly
                sx={{ color: "#F4C842" }}
                aria-label="Average rating: 4.9 out of 5 stars"
              />
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
            <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
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
                  role="article"
                  aria-label={`Review by ${testimonial.name}`}
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
                    aria-hidden="true"
                  />

                  <CardContent sx={{ p: 0 }}>
                    {/* Rating */}
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ color: "#F4C842", mb: 2 }}
                      aria-label={`${testimonial.rating} star rating`}
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
                      component="blockquote"
                    >
                      "{testimonial.text}"
                    </Typography>

                    {/* User Info */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {/* Optimized lazy-loaded avatar */}
                      <LazyAvatar
                        src={testimonial.avatar}
                        alt={`${testimonial.name} profile picture`}
                        size={56}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#7E2C3A",
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                          component="cite"
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
            role="complementary"
            aria-label="Community statistics"
          >
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: 600 }}
              component="h3"
            >
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
                  aria-label="200 plus happy devotees"
                >
                  200+
                </Typography>
                <Typography variant="body1">Happy Devotees</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, color: "#F4C842" }}
                  aria-label="5000 plus modaks blessed"
                >
                  5000+
                </Typography>
                <Typography variant="body1">Modaks Blessed</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, color: "#F4C842" }}
                  aria-label="10 plus cities served"
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
