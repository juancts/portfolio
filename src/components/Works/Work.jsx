import {
  Box,
  Chip,
  Divider,
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
import styled from "@emotion/styled";

const photos = [t1, t2, t3, t4];

const StyledPhotos = styled("images")(({ theme }) => ({
  display: "flex-wrap",
  padding: theme.spacing(3, 0),
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export default function Work() {
  return (
    <Box mt={10}>
      <Divider>
        <Chip label="SOME OF MY WORK" />
      </Divider>
      <StyledPhotos>
        <Typography variant="h5" color="primary">
          My Work
        </Typography>
        <ImageList>
          {itemData.map((item, i) => (
            <ImageListItem key={i}>
              <img src={photos[i]} alt={item.title} loading="lazy" />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>tech: {item.tech}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </StyledPhotos>
    </Box>
  );
}
