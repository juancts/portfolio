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
  //position: "fixed", // fix the footer to the bottom
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
          <Grid sx={{ display: { xs: "none", sm: "none", md:"block" } }} xs={4}>
            <Typography variant="h2" fontFamily="Square Peg" color="white">
              Juan Jose Rodriguez
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ display: { xs: "none", sm: "none", md:"block" } }}>
            <Typography color="white">Social Networks:</Typography>
            <ListItemIcon>
              <LinkedIn />
              <Twitter />
              <Instagram />
              <GitHub />
              <Facebook />
            </ListItemIcon>
          </Grid>
          <Grid sx={{ display: { xs: "block", md:"block" } }} xs={4}>
            <Typography color="white">Contact:</Typography>
            <Typography color="white">(+34)663687261</Typography>
            <Typography color="white">jotarodriguez@gmail.com</Typography>
            <Typography color="white">Terrassa - Barcelona</Typography>
          </Grid>
        </Grid>
      </StyledFooter>
    </Box>
  );
}
