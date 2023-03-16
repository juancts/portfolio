import {
  Box,
  Chip,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React from "react";
import { itemData } from "./items";
import t1 from "../../assets/img/t1.png";
import t2 from "../../assets/img/t2.png";
import t3 from "../../assets/img/t3.png";
import t4 from "../../assets/img/t4.png";

const photos = [t1, t2, t3, t4];

export default function Work() {
  return (
    <Box p={3} mt={10}>
      <Divider>
        <Chip label="SOME OF MY WORK" />
      </Divider>
      <Typography variant="h5" color="primary">
        My Work
      </Typography>
      
        <Grid
          p={3}
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 2, md: 4 }}
        >
          {itemData.map((item, i) => (
            <Grid p={3} justifyContent="space-between" xs={1} md={2} key={i}>
              <ImageListItem>
                <img src={photos[i]} alt={item.title} loading="lazy" />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>tech: {item.tech}</span>}
                  position="below"
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      
    </Box>
  );
}
