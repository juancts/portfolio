import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";

export default function Studies() {
  return (
    <Box id="studies" p={3} mt={10} sx={{ flexGrow: 1 }}>
      <Divider>
        <Chip label="ABOUT MY STUDIES" />
      </Divider>
      <Typography color="primary" variant="h5">
        Studies
      </Typography>
      <Typography variant="h6">
        2022-2023 HENRY | FullStack Developer
      </Typography>
      <Typography paragraph>
        Intensive training in the latest technologies and programming languages.
        Agile methodologies and tools (Scrum). Gaining experience in tools to
        achieve goals of development teams.
      </Typography>
      <Typography variant="h6">
        2003-2008 UADE | Degree in computer science
      </Typography>
      As a computer science graduate, I have gained a strong foundation in both
      theoretical and practical aspects of computing. My degree has also
      equipped me with the ability to think logically and work collaboratively
      in teams. I am excited to apply my knowledge and skills to make meaningful
      contributions in the field of computer science.
      <Typography variant="h6">Secondary school - 1994-1999</Typography>
      <Typography>
      Santa Lucia institute, City: Buenos Aires - Bachelor of Humanities
      </Typography>
    </Box>
  );
}
