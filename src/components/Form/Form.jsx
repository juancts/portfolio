import React from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Chip,
  Divider,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";

// css

const useStyles = makeStyles(() => ({
  loginscreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "30vh",
    textAlign: "center",
    marginTop:"20px",
    marginBottom:"30px"
    
  },
  text: {
    width: "400px",
    height: "5rem",
    lineHeight: "1.6em",
  },
  btnLogin: {
    lineHeight: "2.55rem",
    letterSpacing: "1em",
    textAlign: "center",
    fontWeight: "bold",
    textDecoration: "none",
    color: "primary",
    backgroundColor: "secondary",
    marginTop: "15px",
  },
  btnText: {
    color: "primary",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
}));
export default function Form() {
  const classes = useStyles();
  const onHandleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kacchp3",
        "template_u0j4unb",
        e.target,
        "zi1Em8ggG9bfQ1sVl"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message sent sucessfully 👍",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Something went wrong 🙃",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <Box id="form">
      <Box mb={5} mt={10}>
        <Divider>
          <Chip label="CONTACT FORM" />
        </Divider>
      </Box>
      <Box className={classes.title}>
        <Typography variant="h4">Contact me </Typography>
      </Box>
      <Box paddingTop={10} paddingBottom={10} className={classes.loginscreen}>
        <Box>

        <form onSubmit={onHandleSubmit}>
          <div>
            <TextField
              fullWidth
              className={classes.text}
              type="text"
              label="Name"
              required
              name="from_name"
            />
          </div>

          <div>
            <TextField
              className={classes.text}
              type="email"
              label="Email"
              name="from_email"
              required
            />
          </div>

          <div>
            <TextareaAutosize
              className={classes.text}
              type="text"
              label="Message"
              required
              name="message"
              variant="outlined"
              placeholder="Message here..."
              style={{
                width: 400,
                height: 100,
                borderColor: "#909090",
                borderWidth: 1.3,
                marginBottom: "10px",
              }}
            />
          </div>

          <div className={classes.btnLogin}>
            <Button variant="contained" type="submit" className={classes.btnText}>
              SUBMIT MESSAGE
            </Button>
          </div>
        </form>
        </Box>
      </Box>
    </Box>
  );
}
