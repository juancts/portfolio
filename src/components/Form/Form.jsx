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

  return (
    <Box id="contact" component="section">
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 5 }}>
          
          {/* LEFT SIDE */}
          <Stack spacing={3}>
            <Typography variant="h2">
              Let us build something useful.
            </Typography>
          </Stack>

          {/* FORM */}
          <Box
            component="form"
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            action="/success"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {/* REQUIRED FOR NETLIFY */}
            <input type="hidden" name="form-name" value="portfolio-contact" />

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
              required
              multiline
              minRows={5}
              fullWidth
            />

            <Button type="submit" variant="contained">
              Send message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}