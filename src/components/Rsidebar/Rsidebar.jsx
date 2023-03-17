import { Box, Typography } from "@mui/material";
import React from "react";

export default function Rsidebar() {
  return (
    <Box  flex={2} p={3} pl={6} sx={{display:{xs:"none", sm:"block"}}}>
      <Box sx={{position:{md:"block",xl:"fixed"}}}>
      <Typography variant="h5" marginTop={5} color="primary">SOFT SKILLS</Typography>
        <Typography>
        🔸 Positive Attitude
        </Typography>
        <Typography>
        🔸 Adaptability
        </Typography>
        <Typography>
        🔸 Emphatic        
        </Typography>
        <Typography>
        🔸 Emotional Intelligence
        </Typography>
        <Typography variant="h5" marginTop={5} color="primary">APTITUDES</Typography>
        <Typography>
        🔹 Motivated and organized
        </Typography>
        <Typography>
        🔹 I find purpose helping other people
        </Typography>
        <Typography>
        🔹 Flexibility to change        
        </Typography>
        <Typography>
        🔹 Constant personal development
        </Typography>
        <Typography variant="h5" marginTop={5} color="primary">LANGUAGES</Typography>
        <Typography>
        🔸 Native Spanish
        </Typography>
        <Typography>
        🔸 English B2
        </Typography>
      </Box>
    </Box>
  );
}
