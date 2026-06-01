import { MailOutline, Phone, Place } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const encodeFormData = (data) =>
  new URLSearchParams({
    "form-name": "portfolio-contact",
    ...data,
  }).toString();

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(form),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

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
                maintenance, or a clearer digital presence. Your message will
                arrive through Netlify Forms.
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
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
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
              <input type="hidden" name="form-name" value="portfolio-contact" />
              <Box sx={{ display: "none" }}>
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </Box>
              <TextField
                name="name"
                label="Name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                name="message"
                label="Message"
                value={form.message}
                onChange={handleChange}
                multiline
                minRows={5}
                required
                fullWidth
              />
              {status === "success" && (
                <Alert severity="success">
                  Message sent. Thank you, I will reply soon.
                </Alert>
              )}
              {status === "error" && (
                <Alert severity="error">
                  The message could not be sent. Please email me directly at
                  jotarodriguez@gmail.com.
                </Alert>
              )}
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<MailOutline />}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
