import { Box } from '@mui/material'
import React from 'react'
import About from '../About/About'
import Studies from '../Studies/Studies'
import Work from '../Works/Work'
import Skills from '../Skills/Skills'
import Form from '../Form/Form'

export default function Feed() {
  return (
    <Box flex={4} justifyContent="center">
      <About/>
      <Studies/>
      <Work/>
      <Skills/>
      <Form/>
    </Box>
    
  )
}
