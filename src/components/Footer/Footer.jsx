import styled from "@emotion/styled";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Grid, ListItemIcon, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WebFont from "webfontloader";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#1760a5",
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

export default function Footer() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Square Peg"],
      },
    });
  }, []);

  return (
    <Box>
      <StyledFooter>
        <Grid container spacing={12} alignContent="center" alignItems="center">
          <Grid
               xs={4}
          >
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
            <Box sx={{ display: { xs: "block", md: "block" } }}>
              <Typography color="white">Social Networks:</Typography>
              <ListItemIcon>
                <LinkedIn />
                <Twitter />
                <Instagram />
                <GitHub />
                <Facebook />
              </ListItemIcon>
            </Box>
          </Grid>
          <Grid
            
            xs={4}
          >
            <Box sx={{
              display: {
                xs:"none",
                md: "block",
              },
            }}>
            <Typography color="white">Contact:</Typography>
            <Typography color="white">(+34)663687261</Typography>
            <Typography color="white">jotarodriguez@gmail.com</Typography>
            <Typography color="white">Terrassa - Barcelona</Typography>

            </Box>
          </Grid>
        </Grid>
      </StyledFooter>
    </Box>
  );
}
