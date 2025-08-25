"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Snackbar,
  Alert,
  Fade,
} from "@mui/material";
import {
  Email as EmailIcon,
  Redeem as GiftIcon,
  Notifications as NotificationIcon,
  Star as StarIcon,
} from "@mui/icons-material";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const benefits = [
    {
      icon: <GiftIcon />,
      title: "Exclusive Offers",
      description:
        "Get special discounts on festival collections and early access to new flavors",
    },
    {
      icon: <NotificationIcon />,
      title: "Festival Reminders",
      description:
        "Never miss important dates like Ganesh Chaturthi and Sankashti Chaturthi",
    },
    {
      icon: <StarIcon />,
      title: "Recipe Tips",
      description:
        "Learn traditional modak recipes and modern variations from our experts",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && name) {
      setSubscribed(true);
      setEmail("");
      setName("");
    }
  };

  return (
    <Box
      id="newsletter"
      sx={{
        py: 8,
        background:
          "linear-gradient(135deg, #7E2C3A 0%, #F4C842 50%, #1F6F8B 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          fontSize: "6rem",
          opacity: 0.1,
          transform: "rotate(15deg)",
        }}
      >
        📧
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          fontSize: "4rem",
          opacity: 0.1,
          transform: "rotate(-15deg)",
        }}
      >
        🎁
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Good Karma Rewards
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Join our blessed community and receive divine updates,
                  exclusive offers, and festival reminders straight to your
                  inbox.
                </Typography>

                <Grid container spacing={3}>
                  {benefits.map((benefit, index) => (
                    <Grid item xs={12} key={index}>
                      <Fade in timeout={1000 + index * 200}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Box
                            sx={{
                              bgcolor: "rgba(255,255,255,0.2)",
                              borderRadius: "50%",
                              p: 1.5,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {benefit.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 0.5 }}
                            >
                              {benefit.title}
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                              {benefit.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Fade>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} md={6}>
            <Fade in timeout={1500}>
              <Card
                sx={{
                  p: 4,
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 4,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              >
                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <EmailIcon
                    sx={{ fontSize: "3rem", color: "#7E2C3A", mb: 2 }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ color: "#7E2C3A", fontWeight: 600, mb: 1 }}
                  >
                    Subscribe Now
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Get blessed with divine updates and offers
                  </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubscribe}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    sx={{
                      mb: 3,
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#F4C842",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7E2C3A",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    sx={{
                      mb: 3,
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#F4C842",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#7E2C3A",
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      background:
                        "linear-gradient(45deg, #7E2C3A 30%, #F4C842 90%)",
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #6B2532 30%, #E88B0A 90%)",
                      },
                    }}
                  >
                    Join the Blessed Community
                  </Button>
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 2,
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  "Aapki Shraddha aur Modakpriya Ganesh ji ka Ashirwad!"
                </Typography>
              </Card>
            </Fade>
          </Grid>
        </Grid>

        <Snackbar
          open={subscribed}
          autoHideDuration={6000}
          onClose={() => setSubscribed(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSubscribed(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            🙏 Thank you! You've been blessed with our newsletter subscription!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default NewsletterSection;
