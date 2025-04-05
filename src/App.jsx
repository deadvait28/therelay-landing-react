import './App.css';
import React, { useReducer, useEffect } from "react";
import FaqSection from "./Components/FaqSection";
import FeaturesSection from "./Components/FeaturesSection";
import FooterSection from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";
import NavbarSection from "./Components/NavbarSection";
import ServicesSection from "./Components/ServicesSection";
import { Box } from "@mui/material";
import ThemeProvider from "./ThemeProvider";

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    forceUpdate();
  }, []);

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
        <NavbarSection forceUpdate={forceUpdate} />
        <HeroSection forceUpdate={forceUpdate} />
        <FeaturesSection forceUpdate={forceUpdate} />
        <ServicesSection forceUpdate={forceUpdate} />
        <FaqSection forceUpdate={forceUpdate} />
        <FooterSection forceUpdate={forceUpdate} />
      </Box>
    </ThemeProvider>
  );
};

export default App;