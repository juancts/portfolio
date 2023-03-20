import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
  
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import React from "react";
import { itemData } from "./items";
import t1 from "../../assets/img/t1.png";
import t2 from "../../assets/img/t2.png";
import t3 from "../../assets/img/t3.png";
import t4 from "../../assets/img/t4.png";
import t5 from "../../assets/img/t5.png";

const photos = [t1, t2, t3, t4, t5];

export default function Work() {
  return (
    <Box id="work" p={3} mt={5}>
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
            <Grid textAlign="center"  xs={1} md={2} key={i}>
              
              <ImageListItem>
              <a href={item.link} target="_blank">
                <img src={photos[i]} alt={item.title} loading="lazy" width="90%" />
                </a>
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>tech: {item.tech}</span>}
                  position="below"
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(155, 155, 155, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <Link href={item.link}>
                      <InfoIcon />
                      </Link>
                      
                    </IconButton>
                  }
                />
              </ImageListItem>
              
            </Grid>
          ))}
        </Grid>
      
    </Box>
  );
}
