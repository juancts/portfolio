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

export default function Sidebar({mode, setMode}) {
  return (
    <Box flex={2} p={3} sx={{display:{xs:"none", sm:"block"}}}>
      <Box position="fixed">

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <LocalLibrary />
            </ListItemIcon>
            <ListItemText primary="Studies" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <DoneAll />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}
