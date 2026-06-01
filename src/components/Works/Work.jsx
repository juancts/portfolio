import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { itemData } from "./items";
import t1 from "../../assets/img/t1.png";
import t2 from "../../assets/img/t2.png";
import t3 from "../../assets/img/t3.png";
import t4 from "../../assets/img/t4.png";

const photos = [t1, t2, t3, t4];

export default function Work() {
  return (
    <Box
      id="work"
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
              alignItems: { xs: "flex-start", md: "flex-end" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Chip label="Selected work" color="secondary" />
              <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: 34, md: 48 } }}>
                Projects with business purpose.
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={{ maxWidth: 420, lineHeight: 1.7 }}>
              A mix of custom development, ecommerce, maintenance and practical
              delivery for real online businesses.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 3,
            }}
          >
            {itemData.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  overflow: "hidden",
                  bgcolor: "background.default",
                }}
              >
                <Box
                  component="img"
                  src={photos[index]}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    objectFit: "cover",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                />
                <Stack spacing={2} sx={{ p: 3 }}>
                  <Box>
                    <Typography variant="h5" fontWeight={800}>
                      {item.title}
                    </Typography>
                    <Typography color="primary" fontWeight={700} sx={{ mt: 0.5 }}>
                      {item.tech}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.summary}
                  </Typography>
                  <Button
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    endIcon={<ArrowOutward />}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Visit project
                  </Button>
                </Stack>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
