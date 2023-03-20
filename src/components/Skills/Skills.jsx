import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  return (
    <Box  id="skills" p={3} mt={10}>
      <Divider>
        <Chip label="MY SKILLS | TECHNOLOGY" />
      </Divider>
      <Typography variant="h5" color="primary">
        Skills
      </Typography>
      <Box justifyContent="space-between" mt={10}>
        <Typography variant="h2" color="secondary">
          <Grid
            p={6}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 3, md: 4, xl: 12 }}
          >
            
            <Grid xs={1}>
              <SiPostgresql />
            </Grid>
            <Grid xs={1}>
              <SiJavascript />
            </Grid>
            <Grid xs={1}>
              <SiReact />
            </Grid>
            <Grid xs={1}>
              <SiRedux />
            </Grid>
            <Grid xs={1}>
              <SiExpress />
            </Grid>
            <Grid xs={1}>
              <SiNodedotjs />
            </Grid>
            <Grid xs={1}>
              <SiTailwindcss />
            </Grid>
            <Grid xs={1}>
              <SiSequelize />
            </Grid>
            <Grid xs={1}>
              <SiGithub />
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
}
