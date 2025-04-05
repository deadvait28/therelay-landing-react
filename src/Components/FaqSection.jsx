import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import React, { useState, useReducer, useEffect } from "react";
import FadeIn from "./FadeIn";

const faqItems = [
  {
    id: 1,
    question: "What apps can I connect to The Relay?",
    answer: "You can connect over 50 of the most popular work apps to The Relay like G suite, Microsoft Office apps, Hubspot, Slack and Github.",
  },
  {
    id: 2,
    question: "How can I get my organization on The Relay?",
    answer: "The Relay is the perfect hub to work across all your enterprise apps and augment the capabilities of your workforce, you can reach out to us for Enterprise enquiries.",
  },
  {
    id: 3,
    question: "Do I need technical skills to set up The Relay?",
    answer: "No technical skills required, all you do is connect your app by signing in to them and chat away to get your apps to do tasks for you.",
  },
  {
    id: 4,
    question: "Is The Relay secure?",
    answer: "The Relay uses an open source standard called MCP to connect with your apps. Furthermore all your chats are encrypted and only seen by you.",
  },
  {
    id: 5,
    question: "What exactly can I automate with The Relay?",
    answer: "You can automate any task you would normally do in an app. For example creating a new spreadsheet, reading emails and going over chats. We will be releasing a guide for automations soon.",
  },
  {
    id: 6,
    question: "Which platforms is The Relay on?",
    answer: "The Relay will launch on iOS and Android.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // Force a re-render when component mounts
  useEffect(() => {
    forceUpdate();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 4, sm: 8, md: 10 },
        my: 20, // Adding 80px margin top and bottom (20 units * 4px)
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontSize: { xs: 28, md: 42 }, // Slightly reduced text size
            fontWeight: 600,
            color: "sand.2",
            lineHeight: { xs: "38px", md: "54px" },
            textAlign: "center",
            mb: 8,
          }}
        >
          Answers for the curious
        </Typography>

        <Box sx={{ width: "100%" }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={item.id}
              expanded={expanded === `panel${item.id}`}
              onChange={handleChange(`panel${item.id}`)}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "transparent",
                backgroundImage: "none",
                borderBottom: 1,
                borderColor: "lightGrey",
                "&:before": {
                  display: "none",
                },
                "&:last-of-type": {
                  borderRadius: 0, // Removes the bottom curve effect
                  boxShadow: "none", // Removes any shadow
                },
                "& .MuiAccordionSummary-root": {
                  py: 2.5,
                  px: 2, // Add horizontal padding
                  minHeight: "auto",
                  "&.Mui-expanded": {
                    minHeight: "auto",
                  },
                },
                mb: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ width: 16, height: 16 }} />}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                    "&.Mui-expanded": {
                      margin: 0,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "lightText",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2, py: 1.5 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontSize: "0.85rem" }} // Slightly reduced answer text size
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
