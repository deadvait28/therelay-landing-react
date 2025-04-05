import { Box, Container, Grid, Link, Stack, Typography, Divider } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import logo from "../assets/images/logo.png"; // Import the image
import FadeIn from "./FadeIn";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Join waitlist", href: "https://forms.gle/vQESmoBzFmggXtQf9" },
      { name: "Enterprise enquiry", href: "https://forms.gle/RYo36mSxkYK8e61z7" },
      { name: "Request a feature", href: "https://discord.gg/Sca3U4QKhH" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "https://medium.com/@advait_4835/introducing-the-relay-148304792001" },
      { name: "Blog", href: "https://medium.com/@advait_4835" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Discord", href: "https://discord.gg/XT4y4tz8" },
      { name: "X", href: "https://x.com/TheRelayHub" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/therelay" },
    ],
  },
];

const FooterLogo = () => (
  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
    <Box component="img" src={logo} alt="The Relay Logo" sx={{ width: 35, height: 31 }} />
    <Typography sx={{ fontFamily: "'Inter-Medium', Helvetica", fontWeight: 500, fontSize: 15.3, letterSpacing: 1.22, color: "grey.0" }}>
      THE RELAY
    </Typography>
  </Box>
);

const FooterNav = () => (
  <Grid 
    container 
    spacing={2} 
    justifyContent={{ xs: "flex-start", md: "flex-start" }} 
    textAlign={{ xs: "left", md: "left" }}
  >
    {footerLinks.map((category, index) => (
      <Grid 
        item 
        xs={6}  // Changed from xs={12} to xs={6} to create two columns
        sm={6} 
        md={3} 
        key={index}
      >
        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: "1rem", color: "text.primary" }}>
            {category.title}
          </Typography>
          {category.links.map((link, linkIndex) => (
            <Link 
              key={linkIndex} 
              href={link.href} 
              underline="none" 
              sx={{ 
                color: "text.secondary", 
                fontSize: "0.875rem", 
                display: "block" 
              }}
            >
              {link.name}
            </Link>
          ))}
        </Stack>
      </Grid>
    ))}
  </Grid>
);

const FooterBottom = () => (
  <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={1} sx={{ py: 0, textAlign: "center" }}>
    <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
      © 2025 The Relay. All rights reserved.
    </Typography>
    <Stack direction="row" spacing={2}>
      <Link href="#" underline="none" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
        Privacy Policy
      </Link>
      <Link href="#" underline="none" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
        Terms of Service
      </Link>
    </Stack>
  </Stack>
);

const FooterSection = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // Force a re-render when component mounts
  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <Box component="footer" sx={{ 
      width: "100%", 
      bgcolor: "background.default", 
      px: 8, // Changed to 32px padding left and right (8 units * 4px)
      my: 20,
    }}>
      <Container maxWidth="lg" disableGutters>
        {/* Footer Logo & Nav: Adjusted layout to align to top */}
        <Grid container spacing={2} alignItems="flex-start" sx={{ pt: 3, pb: 6 }}>
          <Grid item xs={12} md={3}>
            <FooterLogo />
          </Grid>
          <Grid item xs={12} md={9}>
            <FooterNav />
          </Grid>
        </Grid>

        {/* Divider with color #A1A1AA */}
        <Divider sx={{ borderColor: "#rgba(113, 113, 122, 1)", my: 2 }} />

        {/* Footer Bottom Section */}
        <FooterBottom />
      </Container>
    </Box>
  );
};

export default FooterSection;
