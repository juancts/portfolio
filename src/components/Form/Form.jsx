import { MailOutline, Phone, Place } from "@mui/icons-material";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const subject = encodeURIComponent(`Portfolio contact from ${form.name || "visitor"}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  );

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "linear-gradient(135deg, rgba(47,128,237,0.16), rgba(39,196,152,0.10))",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 } }}>
                Let us build something useful.
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                Tell me what you need: a new web app, ecommerce improvements,
                maintenance, or a clearer digital presence. I will reply from
                my Gmail directly.
              </Typography>
            </Box>

            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <MailOutline color="primary" />
                <Typography color="text.secondary">jotarodriguez@gmail.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Phone color="primary" />
                <Typography color="text.secondary">(+34) 663 687 261</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Place color="primary" />
                <Typography color="text.secondary">Terrassa - Barcelona</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Box
            component="form"
            sx={{
              p: { xs: 2, sm: 3 },
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              boxShadow: "0 24px 70px rgba(0,0,0,0.18)",
            }}
          >
            <Stack spacing={2}>
              <TextField
                name="name"
                label="Name"
                value={form.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="message"
                label="Message"
                value={form.message}
                onChange={handleChange}
                multiline
                minRows={5}
                fullWidth
              />
              <Button
                href={`mailto:jotarodriguez@gmail.com?subject=${subject}&body=${body}`}
                variant="contained"
                size="large"
                startIcon={<MailOutline />}
              >
                Send email
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
