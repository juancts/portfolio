import styled from "@emotion/styled";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Grid, Link, ListItemIcon, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect } from "react";
import WebFont from "webfontloader";

const StyledFooter = styled("footer")(({ theme }) => ({
   //"#1760a5",
  opacity: 1, // hacer el componente completamente opaco
  display: "flex",
  height: "150px",
  justifyContent: "space-evenly",
  padding: theme.spacing(3, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 0),
  },
  "& > div": {
    textAlign: "center",
  },
  bottom: 0,
  left: 0,
  width: "100%",
}));

export default function Footer({mode}) {
  let color="";
  mode === "light" ? color="#1760a5" : color="#272727";
  console.log("COLOR:",color)
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Square Peg"],
      },
    });
  }, []);



  return (
    <Box backgroundColor={color} color={"text.primary"}>
      
      <StyledFooter >
        <Grid container spacing={12} alignContent="center" alignItems="center">
          <Grid xs={4}>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Typography
                pl={10}
                variant="h2"
                fontFamily="Square Peg"
                color="white"
              >
                Juan Jose Rodriguez
              </Typography>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box
              alignItems="center"
              textAlign="center"
              sx={{
                display: { xs: "block", md: "block" },
                paddingLeft: { xs: "80px" },
              }}
            >
              
              <ListItemIcon>
                <Link href="https://www.linkedin.com/in/jjrodriguez81/" color="inherit">
                  <LinkedIn />
                </Link>
                <Link href="https://twitter.com/jotar81" color="inherit">
                  <Twitter />
                </Link>

                <Link href="https://instagram.com/jeijeiok?igshid=ZDdkNTZiNTM="  color="inherit">
                  <Instagram />
                </Link>
                <Link href="https://github.com/juancts" color="inherit">
                  <GitHub />
                </Link>
                <Link href="https://www.facebook.com/jjrodriguez81" color="inherit">
                <Facebook />
                </Link>
              </ListItemIcon>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Typography color="white">Contact:</Typography>
              <Typography color="white">
                <Link href="https://wa.me/34663687261" color="inherit">
                  (+34)663687261
                </Link>
              </Typography>
              <Typography color="white">
                <Link href="mailto:jotarodriguez@gmail.com" color="inherit">
                  jotarodriguez@gmail.com
                </Link>
              </Typography>
              <Typography color="white">Terrassa - Barcelona</Typography>
            </Box>
          </Grid>
        </Grid>
      </StyledFooter>
    </Box>
  );
}
