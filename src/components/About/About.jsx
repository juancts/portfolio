import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import perfil from "../../assets/img/perfil1.jpg";

export default function About() {
  return (
    <Box id="about">
      <Card>
        <CardHeader title="Hi!, Im Juan!" subheader="FullStack Developer" />
        <CardMedia
          component="img"
          height="340"
          image={perfil}
          alt="Me"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography >
            Hello!, I am a Full Stack developer with a degree in computer
            science with experience in different technologies such as SQL, HTML,
            CSS, JavaScript, Node.js, React, postgres, Typescript, MongoDB, Salesforce and
            more. I am passionate about creating innovative solutions and
            working in challenging and innovative environments. I am focused,
            committed, and believe in open communication and collaboration to
            achieve common goals. If you are looking for someone with a positive
            attitude, who finds value in helping other people and colleagues
            with soft skills suitable for teamwork, please contact me. I am
            willing to continue growing professionally and contribute to the
            success of your company.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

// <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           "& > :not(style)": {
//             m: 5,
//             width: 800,
//             height: 800,
//           },
//         }}
//       >
//         <Paper borderRadius={20} elevation={3}>
//           <Typography variant="h2" align="center">
//             Hi!, I`m Juan, I`m FullStack Developer!
//           </Typography>
//           <Typography variant="h4" align="center">
//             And you'r Welcome!
//           </Typography>
//           <CardMedia  component="img" width="150" image={perfil} alt="Me" />
//           <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//         </Paper>
//       </Box>
