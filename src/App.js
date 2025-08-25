import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ModakGallery from "./components/ModakGallery";
import IngredientsSection from "./components/IngredientsSection";
import SeasonalSection from "./components/SeasonalSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F4C842", // Saffron Gold
      dark: "#E88B0A", // Deep Marigold
    },
    secondary: {
      main: "#7E2C3A", // Rich Burgundy
      light: "#1F6F8B", // Teal Terrazzo
    },
    background: {
      default: "#FFF8E7", // Ivory/Cream
      paper: "#FFFFFF", // Pearl White
    },
    text: {
      primary: "#abababff",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Header />
        <HeroSection />
        <StorySection />
        <ModakGallery />
        <IngredientsSection />
        <SeasonalSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
        <WhatsAppWidget />
      </Box>
    </ThemeProvider>
  );
}

export default App;
