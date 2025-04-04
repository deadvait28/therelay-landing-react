import './App.css';
import React from "react";
import FaqSection from "./Components/FaqSection";
import FeaturesSection from "./Components/FeaturesSection";
import FooterSection from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";
import NavbarSection from "./Components/NavbarSection";
import ServicesSection from "./Components/ServicesSection";
import { Box } from "@mui/material";
import { ThemeProvider } from "./ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          bgcolor: "background.default",
        }}
      >
        <NavbarSection />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <FaqSection />
        <FooterSection />
      </Box>
    </ThemeProvider>
  );
};

export default App;