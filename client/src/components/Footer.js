import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/lotusiobottomlogo.png'

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '145px', height: '150px' }} />
    </Stack>
  </Box>
);

export default Footer;