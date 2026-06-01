import { ArrowForward, MailOutline, Place } from "@mui/icons-material";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import perfil from "../../assets/img/perfil1.jpg";

const highlights = ["React", "Node.js", "Postgres", "Salesforce"];

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 7, md: 12 },
        background:
          "linear-gradient(135deg, rgba(47,128,237,0.20) 0%, rgba(39,196,152,0.12) 42%, rgba(13,17,23,0) 78%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          <Stack spacing={3}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Available for web projects" color="secondary" />
              <Chip icon={<Place />} label="Terrassa - Barcelona" variant="outlined" />
            </Stack>

            <Box>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  fontSize: { xs: 42, sm: 58, md: 72 },
                  lineHeight: 0.95,
                  maxWidth: 720,
                }}
              >
                Full Stack developer focused on clean, useful digital products.
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mt: 3, maxWidth: 680, lineHeight: 1.7 }}
              >
                Hi, I am Juan. I build web experiences with React, Node.js,
                databases and a practical product mindset. I like clear
                interfaces, direct communication and teams that move with
                purpose.
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                href="#work"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
              >
                View my work
              </Button>
              <Button
                href="mailto:jotarodriguez@gmail.com"
                variant="outlined"
                size="large"
                startIcon={<MailOutline />}
              >
                Start a conversation
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {highlights.map((item) => (
                <Chip key={item} label={item} sx={{ bgcolor: "background.paper" }} />
              ))}
            </Stack>
          </Stack>

          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 420, md: 560 },
            }}
          >
            <Box
              component="img"
              src={perfil}
              alt="Juan Jose Rodriguez"
              sx={{
                width: "100%",
                height: { xs: 420, md: 560 },
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: 2,
                boxShadow: "0 26px 80px rgba(0,0,0,0.34)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: { xs: 18, md: -30 },
                bottom: { xs: 18, md: 34 },
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                p: 2.5,
                maxWidth: 280,
                boxShadow: "0 18px 55px rgba(0,0,0,0.22)",
              }}
            >
              <Typography variant="overline" color="primary" fontWeight={800}>
                What I bring
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Technical versatility, empathy with users and the discipline to
                turn messy ideas into working software.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
