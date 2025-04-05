import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import apps from "../assets/images/apps.png";
import chat from "../assets/images/chat.png";
import automations from "../assets/images/automations.png";
import AppsIcon from "../assets/icons/AppsIcon.png";
import AutomateIcon from "../assets/icons/AutomateIcon.png";
import WorkIcon from "../assets/icons/WorkIcon.png";
import FadeIn from "./FadeIn";

const FeaturesSection = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // Force a re-render when component mounts
  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1312px",
        width: "100%",
        alignItems: "center",
        px: { xs: 3, sm: 6, md: 8 },
        py: { xs: 8, md: 12 },
        gap: { xs: 4, md: 8 },
        bgcolor: "background.default",
      }}
    >
      <FadeIn>
        <Typography
          variant="h6"
          sx={{
            color: "sand.2",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          What is The Relay?
        </Typography>
      </FadeIn>

      <Stack spacing={4} width="100%">
        {/* First Feature Card */}
        <FadeIn>
          <Paper
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: 6,
              p: 6,
              borderRadius: "12px",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                flex: 1,
                alignSelf: "flex-end",
              }}
            >
              <Box
                component="img"
                src={AppsIcon}
                sx={{ width: 32, height: 32 }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "text.primary",
                }}
              >
                A single hub to get work done at speed
              </Typography>

              <Stack spacing={2}>
                <Typography variant="body1" sx={{ color: "#eae8dd" }}>
                  Stop juggling apps and doing menial work over and over. With The
                  Relay, chat directly with all your work apps in a unified space.
                </Typography>

                <Typography variant="body1" sx={{ color: "#eae8dd" }}>
                  Ask questions, give instructions and automate tasks so you can focus on what matters.
                  
                </Typography>
              </Stack>
            </Box>

            <Box
              component="img"
              src={apps}
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "auto",
              }}
            />
          </Paper>
        </FadeIn>

        {/* Bottom Feature Cards */}
        <Grid
          container
          spacing={4}
          sx={{
            width: "100%",
            m: 0,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch"
          }}
        >
          {/* Left Card */}
          <Grid 
            item 
            xs={12} 
            sm={6}
            sx={{ display: "flex" }}
          >
            <FadeIn delay={0.2} sx={{ width: "100%" }}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  gap: 6,
                  p: 6,
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundImage:
                    "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
                  flex: 1
                }}
              >
                <Box component="img" src={chat} sx={{ width: "100%", height: "auto", objectFit: "contain" }} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box
                    component="img"
                    src={WorkIcon}
                    sx={{ width: 32, height: 32 }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, fontSize: "24px", color: "text.primary" }}
                  >
                    Your apps are ready to work for you
                  </Typography>
                  <Typography variant="body1" sx={{ color: "sand.2" }}>
                    Just give your requests and watch as your apps work together
                    intelligently to complete tasks with our AI agent. Say goodbye to manual labor and hello
                    to effortless orchestration.
                  </Typography>
                </Box>
              </Paper>
            </FadeIn>
          </Grid>

          {/* Right Card */}
          <Grid 
            item 
            xs={12} 
            sm={6}
            sx={{ display: "flex" }}
          >
            <FadeIn delay={0.4} sx={{ width: "100%" }}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  gap: 6,
                  p: 6,
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundImage:
                    "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
                  flex: 1
                }}
              >
                <Box
                  component="img"
                  src={automations}
                  sx={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box
                    component="img"
                    src={AutomateIcon}
                    sx={{ width: 32, height: 32 }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, fontSize: "24px", color: "text.primary" }}
                  >
                    Easy automation
                  </Typography>
                  <Typography variant="body1" sx={{ color: "sand.2" }}>
                    Create repeatable tasks for the Agent to work on at a fixed time and earn your time back in your workday. Watch The Relay transform your work force to the next level of productivity.
                  </Typography>
                </Box>
              </Paper>
            </FadeIn>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default FeaturesSection;