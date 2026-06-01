import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, MailOutline } from "@mui/icons-material";
import perfil from "../../assets/img/perfil.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Studies", href: "#studies" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ mode, setMode }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(13, 17, 23, 0.78)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flex: 1 }}>
            <Avatar src={perfil} alt="Juan Jose Rodriguez" sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography variant="subtitle1" fontWeight={800} lineHeight={1}>
                Juan J. Rodriguez
              </Typography>
              <Typography variant="caption" color="grey.400">
                Full Stack Developer
              </Typography>
            </Box>
          </Stack>

          <Stack
            component="nav"
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Button key={item.href} href={item.href} color="inherit" size="small">
                {item.label}
              </Button>
            ))}
          </Stack>

          <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
            <IconButton
              color="inherit"
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>

          <Button
            href="mailto:jotarodriguez@gmail.com"
            variant="contained"
            startIcon={<MailOutline />}
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          >
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
