import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Tooltip, Typography } from "@mui/material";

const socials = [
  { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
  { label: "GitHub", icon: GitHub, href: "https://github.com/juancts" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com/" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: "#090d13" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography color="white" fontWeight={800}>
              Juan Jose Rodriguez
            </Typography>
            <Typography color="grey.500" variant="body2">
              Full Stack Developer - Terrassa, Barcelona
            </Typography>
          </Box>

          <Stack direction="row" spacing={0.5}>
            {socials.map(({ label, icon: Icon, href }) => (
              <Tooltip key={label} title={label}>
                <IconButton
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  sx={{ color: "grey.300" }}
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
