import {
  Description,
  DoneAll,
  Home,
  LocalLibrary,
  Mail,
  ModeNight,
  Work,
} from "@mui/icons-material";
import {
  Box,
  ListItemButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import React from "react";

export default function Sidebar({ mode, setMode }) {
  const handleAutoScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box flex={2} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#about"
              onClick={() => handleAutoScroll("about")}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#about"
              onClick={() => handleAutoScroll("about")}
            >
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#studies"
              onClick={() => handleAutoScroll("studies")}
            >
              <ListItemIcon>
                <LocalLibrary />
              </ListItemIcon>
              <ListItemText primary="Studies" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#work"
              onClick={() => handleAutoScroll("work")}
            >
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="work" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#skills"
              onClick={() => handleAutoScroll("skills")}
            >
              <ListItemIcon>
                <DoneAll />
              </ListItemIcon>
              <ListItemText primary="Skills" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#skills"
              onClick={() => handleAutoScroll("skills")}
            >
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#form">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) =>
                  setMode(mode === "light" ? "dark" : "light")
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}