import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
    <Box 
      sx={{ mt: { lg: '150px', xs: '70px' }, 
      ml: { xl: '40px', lg: '40px' } }} 
      position={{ lg: "relative", md: "static", sm: "static", xs: "static" }}
      display= {{ lg: "block", md: "flex", sm: "flex", xs: "flex" }}
      flexDirection= {{ sm: "column", md: "column", xs: "column"}}
      alignItems= {{ sm: "center ", md: "center", xs: "center"}}
    >
    <Typography color="#3B9AE1" fontWeight="600" fontSize="26px">Wellness Resource</Typography>
    <Typography 
      fontWeight={700} 
      sx={{ fontSize: { lg: '44px', xs: '40px' } }} 
      mb="23px" mt="30px"
      textAlign={{ xl: "left", lg: "left", sm: "center", xs: "center"}}
    >
        Explore Yoga <br />
        And Mindfulness
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Popular poses and more
    </Typography>
    <Stack>
        <a href="#exercises" 
        style={{ marginTop: '45px', textDecoration: 'none', 
        width: '200px', textAlign: 'center', 
        background: '#3B9AE1', padding: '14px', 
        fontSize: '22px', textTransform: 'none', color: 'white', 
        borderRadius: '4px' }}>
          Explore Poses
          </a>
    </Stack>
    <Typography 
    fontWeight={600} color="#3120E0" 
    sx={{ opacity: '0.1', 
    display: { lg: 'block', xs: 'none' }, 
    fontSize: '200px' }}
    >
      Yoga
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner