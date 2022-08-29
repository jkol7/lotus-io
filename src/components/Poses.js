import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

const Poses = ({setPoses, poses, category}) => (

  <Box id='poses' sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    {console.log(poses)}
    <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
      Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {poses.map((pose, index) => (     
      <p>{pose.english_name}</p>
     ) ) }

    </Stack>
  </Box>
 


)

export default Poses;