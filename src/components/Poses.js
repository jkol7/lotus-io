import React, { useEffect, useState } from 'react';
import PoseCard from './PoseCard'
import Loader from './Loader'
import { Box, Stack, Typography } from '@mui/material';

const Poses = ({ setPoses, poses, category }) => {

useEffect(() => {

  const getCategoryData = async () => {
    const response = await fetch(`https://lightning-yoga-api.herokuapp.com/yoga_categories/${category+1}`)
    const data = await response.json()  
      setPoses(data.yoga_poses)
    }
      getCategoryData() 
}, [category])

if (!poses.length) return <Loader />;

return (

<Box id='poses' sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
     </Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {poses.map((pose) => (     
      <p><PoseCard key={pose.id} pose={pose}></PoseCard></p>
     ) ) }
    </Stack>
  </Box>
)

    }

export default Poses;