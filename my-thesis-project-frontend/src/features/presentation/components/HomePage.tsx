import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function HomePage() {
  const theme = createTheme({
    typography: {
      button: {},
    },
    palette: {
      primary: {
        //main: "#5F8575",
        main: "#5b799e",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ backgroundColor: "#f4f4f9", height: "100vh", padding: "2rem" }}
      >
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
          <Typography variant="h3" gutterBottom>
            Welcome to My Bachelor Project on CLEAN Architecture
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Learn about the principles of CLEAN Architecture and how it ensures
            scalable, maintainable, and testable applications in web
            development.
          </Typography>
          <Button variant="contained" color="primary" href="#about">
            Learn More
          </Button>
        </Box>

        {/* About Section */}
        <Box id="about" sx={{ marginBottom: "4rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            What is CLEAN Architecture?
          </Typography>
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "2rem",
                    boxShadow: 3,
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Separation of Concerns
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    CLEAN Architecture focuses on separating the application's
                    business logic from the framework and other external
                    concerns. By applying this principle, your app becomes more
                    flexible and easier to maintain.
                  </Typography>
                </Paper>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "2rem",
                    boxShadow: 3,
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Testability & Maintainability
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    CLEAN Architecture makes it easier to write automated tests
                    for each component in isolation. It emphasizes dependency
                    inversion and allows for changes in one layer of the
                    application without affecting others.
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Principles Section */}
        <Box sx={{ marginBottom: "4rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Principles of CLEAN Architecture
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "300px" }}>
              <Paper sx={{ padding: "2rem", boxShadow: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Entity Layer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This is the core of the application. It contains the business
                  rules and logic that are independent of external concerns such
                  as databases or UI frameworks.
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: "100%", maxWidth: "300px" }}>
              <Paper sx={{ padding: "2rem", boxShadow: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Use Case Layer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This layer defines the specific use cases for the application
                  and interacts with the entity layer. It coordinates the flow
                  of information between the business logic and external
                  interfaces.
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: "100%", maxWidth: "300px" }}>
              <Paper sx={{ padding: "2rem", boxShadow: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Interface Layer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This layer interacts with the UI, databases, and external
                  services. It serves as the boundary where external details are
                  connected to the core business logic.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ textAlign: "center", padding: "1rem" }}>
          <Typography variant="body2" color="textSecondary" paragraph>
            Built with ReactJS, NextJS, NestJS, Material-UI, JavaScript,
            TypeScript, MongoDB. Check out more about CLEAN Architecture in web
            development.
          </Typography>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              href="https://github.com/Latumi1192/CLEAN_Thesis"
              target="_blank"
              sx={{ marginRight: "1rem" }}
            >
              <GitHub />
              GitHub
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
