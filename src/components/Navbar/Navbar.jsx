import { Description, DoneAll, Home, LocalLibrary, Mail, Work } from "@mui/icons-material";
import { AppBar, Avatar, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import perfil from "../../assets/img/perfil.jpg"


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-Between",
});


const Icons = styled("Box")(({theme})=>({
        display: "none",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]:{
            display:"flex",
        }
}))

//FOR SMALL DISLAYS
const UserBox = styled("Box")(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
}))



export default function Navbar() {
    const[open, SetOpen] = useState(false);



    const handleClick = (e)=>{
        SetOpen(true);
    }

    const handleClose = (e)=>{
        SetOpen(false);
    }

  return (
    
    <AppBar  position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Welcome to my personal Web Portfolio</Typography>
        <Home sx={{display:{xs:"block", sm:"none"}}}/>
        {/* <Search><InputBase placeholder="Search..." /></Search> */}
        <Icons>
            <Home sx={{display:{xs:"none", sm:"block"}}}/>
            <Description />
            <LocalLibrary />
            <Work />
            <DoneAll />
            <Mail />
            <Avatar onClick={handleClick} src={perfil} sx={{width:30, height:30}}/>
        </Icons>
        <UserBox>
          <Typography>Juan R.</Typography>
          <Avatar onClick={handleClick} src={perfil} sx={{width:30, height:30}}/>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Home</MenuItem>
        <MenuItem >About Me</MenuItem>
        <MenuItem >My Services</MenuItem>
        <MenuItem >My Work</MenuItem>
        <MenuItem >Skills & Tools</MenuItem>
        <MenuItem >Contact</MenuItem>
      </Menu>
    </AppBar>
  );
}
