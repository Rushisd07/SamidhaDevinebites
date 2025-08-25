import React, { useState } from "react";
import {
  Box,
  Fab,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hello, I need some information about your services."
  );

  // Replace with your actual phone number (with country code, no +)
  const phoneNumber = "9175156569";

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      {isOpen && (
        <Paper
          elevation={3}
          sx={{
            width: { xs: 280, md: 320 },
            position: "absolute",
            bottom: 70,
            right: 0,
            borderRadius: 2,
            overflow: "hidden",
            transition: "all 0.3s ease",
            animation: "slideIn 0.3s ease forwards",
            "@keyframes slideIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2,
              background:
                "linear-gradient(135deg, #e3356fff 0%, #35e0ccff 100%)",
              color: "white",
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 24, mr: 1 }} />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ flexGrow: 1 }}
            >
              Chat with Samidha Divinebites on WhatsApp
            </Typography>
            <IconButton size="small" color="inherit" onClick={toggleWidget}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Body */}
          <Box sx={{ p: 2, bgcolor: "#E8F4FC" }}>
            <Typography variant="body2" gutterBottom>
              Hi there! 👋 <br />
              How can we help you today?
            </Typography>
          </Box>

          {/* Message input */}
          <Box sx={{ p: 2, bgcolor: "#F5F5F5" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ mb: 1 }}
            />
            <Button
              fullWidth
              variant="contained"
              startIcon={<SendIcon />}
              onClick={handleSend}
              sx={{
                bgcolor: "#cdd325ff",
                "&:hover": { bgcolor: "#f8ba48ff" },
                borderRadius: 2,
              }}
            >
              Start Chat
            </Button>
          </Box>
        </Paper>
      )}

      {/* WhatsApp Button */}
      <Fab
        color="primary"
        aria-label="whatsapp"
        onClick={toggleWidget}
        sx={{
          bgcolor: "#25D366",
          "&:hover": { bgcolor: "#128C7E" },
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.5)",
          animation: isOpen ? "none" : "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)" },
            "70%": { boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)" },
            "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
};

export default WhatsAppWidget;
