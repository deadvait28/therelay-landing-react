import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import image4 from "../assets/images/Hero updated.png"; // Import the image

const HeroSection = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // Force a re-render when component mounts
  useEffect(() => {
    forceUpdate();
  }, []);

  // Data for the hero section
  const heroData = {
    title: "Your command center to work across all your enterprise apps",
    description:
      "Save upto 1.8 hours a day by connecting all your work apps together. Chat, automate, and get work done for you across siloed apps today",
    buttonText: "Get Early Access",
    image: image4,
  };

  // You can call forceUpdate() whenever you need to force a re-render
  
  return (
    <Box
      key={heroData.title}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1312px",
        width: "100%",
        px: { xs: 3, sm: 6, md: 8 },
        my: 20,
        gap: { xs: 4, md: 8 },
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={heroData.image}
        alt="Phone displaying app interface"
        key={Date.now()}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          objectFit: "contain",
          mb: 10
        }}
      />

      <Stack
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "sand.2",
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            lineHeight: 1,
            textAlign: "center"
          }}
        >
          {heroData.title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "16px", sm: "18px" },
            px: { xs: 2, md: 0 },
            fontWeight: 400,
            lineHeight: { xs: "24px", sm: "28px" },
            letterSpacing: "0.15px",
            mt: 2,
            textAlign: "center"
          }}
        >
          {heroData.description}
        </Typography>

        <Button
          variant="contained"
          onClick={() => window.open("https://forms.gle/vQESmoBzFmggXtQf9", "_blank")}
          sx={{
            width: { xs: "100%", sm: "300px" },
            height: "48px",
            borderRadius: "8px",
            mt: 6,
            background:
              "linear-gradient(180deg, rgba(248,247,244,1) 0%, rgba(154,148,118,1) 100%)",
            color: "sand.7",
            fontWeight: 600,
            boxShadow: "0 4px 8px rgba(214, 210, 188, 0.8)",
            "&:hover": {
              background:
                "linear-gradient(180deg, rgba(248,247,244,0.9) 0%, rgba(154,148,118,0.9) 100%)",
              boxShadow: "0 4px 8px rgba(214, 210, 188, 1)",
            },
          }}
        >
          {heroData.buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

export default HeroSection;