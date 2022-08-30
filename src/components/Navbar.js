import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/lotusiotop.png'

function Navbar() {
  return (
    <Stack
      direction="row" 
      justifyContent="space-around" 
      sx={{ gap: { sm: '123px', xs: '40px' }, 
      mt: { sm: '32px', xs: '20px' }, 
      alignItems: 'center',
      justifyContent: 'none' }} px="20px"
    >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '160px', height: '100px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      justifyContent='center'
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #3B9AE1' }}>Home</Link>
      <a href="#poses" style={{ textDecoration: 'none', color: '#3A1212' }}>Poses</a>
    </Stack>
  </Stack>
);
  }

export default Navbar