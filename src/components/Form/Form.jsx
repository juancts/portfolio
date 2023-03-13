import { Box, Chip, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Form() {
  return (
    <Box
    mt={10}
    maxWidth="100%"
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <Divider>
    <Chip label="CONTACT FORM" />
    </Divider>
    <Typography variant="h4">Please, feel free to contact me:</Typography>
    <div>
      <TextField
        id="outlined-multiline-flexible"
        label="Name"
        multiline
        maxRows={4}
      />
      <TextField
        id="outlined-textarea"
        label="Email"
        placeholder="Placeholder"
        multiline
      />
      <TextField
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        defaultValue="Write to me!"
      />
    </div>
    </Box>
  )
}
