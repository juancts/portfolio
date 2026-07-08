import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import {
  SiDatabricks,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSalesforce,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Sequelize", icon: SiSequelize },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Data Loader", icon: SiDatabricks },
  { name: "Workbench", icon: SiDatabricks },
  { name: "Codex / AI tools", icon: SiOpenai },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "GitHub", icon: SiGithub },
];

const qualities = [
  "Positive attitude",
  "Adaptability",
  "Emotional intelligence",
  "Organized delivery",
  "Client communication",
  "Continuous learning",
];

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "start",
          }}
        >
          <Box>
            <Chip label="Skills and tools" color="primary" variant="outlined" />
            <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: 34, md: 48 } }}>
              Technology with a human operating system.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
              I combine frontend, backend, Salesforce administration, data
              migration and AI-assisted development with the soft skills needed
              to keep projects moving clearly.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 3 }}>
              {qualities.map((quality) => (
                <Chip key={quality} label={quality} />
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
              gap: 2,
            }}
          >
            {skills.map(({ name, icon: Icon }) => (
              <Stack
                key={name}
                spacing={1.5}
                alignItems="center"
                justifyContent="center"
                sx={{
                  minHeight: 150,
                  p: 2,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Box sx={{ fontSize: 44, color: "secondary.main", lineHeight: 1 }}>
                  <Icon />
                </Box>
                <Typography fontWeight={800} textAlign="center">
                  {name}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
