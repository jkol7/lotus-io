import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/lotusiotop.png'

function Navbar() {
  return (
    <Stack
      direction={{ xl: "row", lg: "row", md: "column", xs: "column"}} 
      justifyContent={{ xl: "space-around", md: "center"}}
      sx={{ gap: { sm: '20px', xs: '40px' }, 
      mt: { sm: '20px', xs: '15px' }, 
      alignItems: 'center',
      justifyContent: 'none' }} px="20px"
    >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '160px', height: '100px', marginLeft: '10px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      justifyContent='center'
    >
    </Stack>
  </Stack>
);
  }

export default Navbar