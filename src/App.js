import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Studies from "./components/Studies/Studies";
import Work from "./components/Works/Work";
import Skills from "./components/Skills/Skills";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#2f80ed",
          },
          secondary: {
            main: "#27c498",
          },
          background: {
            default: mode === "dark" ? "#0d1117" : "#f6f8fb",
            paper: mode === "dark" ? "#141a23" : "#ffffff",
          },
          text: {
            primary: mode === "dark" ? "#eef4ff" : "#172033",
            secondary: mode === "dark" ? "#a9b6c8" : "#58657a",
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 800,
            letterSpacing: 0,
          },
          h2: {
            fontWeight: 800,
            letterSpacing: 0,
          },
          h3: {
            fontWeight: 750,
            letterSpacing: 0,
          },
          button: {
            fontWeight: 700,
            textTransform: "none",
          },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Navbar mode={mode} setMode={setMode} />
        <Box component="main">
          <About />
          <Studies />
          <Work />
          <Skills />
          <Form />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
