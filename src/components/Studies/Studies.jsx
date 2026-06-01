import { Box, Chip, Container, Stack, Typography } from "@mui/material";

const studies = [
  {
    years: "2022 - 2023",
    place: "Henry",
    title: "Full Stack Developer",
    description:
      "Intensive training in modern web technologies, agile methodologies and team-oriented delivery.",
  },
  {
    years: "2003 - 2008",
    place: "UADE",
    title: "Degree in Computer Science",
    description:
      "A solid foundation in computing, logical thinking, software design and collaborative problem solving.",
  },
  {
    years: "1994 - 1999",
    place: "Santa Lucia Institute",
    title: "Bachelor of Humanities",
    description:
      "Communication, critical thinking and people skills that still shape the way I work with clients and teams.",
  },
];

export default function Studies() {
  return (
    <Box id="studies" component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box>
            <Chip label="Studies and path" color="primary" variant="outlined" />
            <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: 34, md: 48 } }}>
              Built on code, curiosity and communication.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2,
            }}
          >
            {studies.map((study) => (
              <Box
                key={`${study.years}-${study.title}`}
                sx={{
                  p: 3,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  minHeight: 260,
                }}
              >
                <Typography color="primary" fontWeight={800}>
                  {study.years}
                </Typography>
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 800 }}>
                  {study.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {study.place}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                  {study.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
