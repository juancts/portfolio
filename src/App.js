import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed/Feed";
import Lsidebar from "./components/Lsidebar/Lsidebar";
import Rsidebar from "./components/Rsidebar/Rsidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import './styles/global.css';


function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect((mode)=>{
    mode=setMode;
  },[mode])

  

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Lsidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rsidebar />
        </Stack>
        <Footer mode={mode}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;

// <ThemeProvider theme={darkTheme}>
// <Box bgcolor={"background.default"} alignItems="center" color={"text.primary"}>
//   <Navbar />
//   <Stack
//   paddingLeft={22}
//     display="flex"
//     direction="row"
//     justifyContent="center"
//     spacing={2}
//   >
//     <Lsidebar  setMode={setMode} mode={mode}/>
//     <Feed />
//     <Rsidebar />
//   </Stack>
//   <Box mt={20}>
//     <Footer />
//   </Box>
// </Box>
// </ThemeProvider>
