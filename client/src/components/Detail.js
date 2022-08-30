import React from 'react'
import { Typography, Stack, Button } from '@mui/material';


const Detail = ( { poseDetail, categoryDetail }) => {
    
  // Creates the detail above the Youtube links on pose pages

    const { img_url, english_name, sanskrit_name } = poseDetail 
    
    return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
    <img src={img_url} alt={english_name} loading="lazy" className="detail-image"  />
    <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
      <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
        {english_name} / {sanskrit_name}
      </Typography>
      <Typography sx={{ fontSize: { lg: '32px', xs: '24px' } }} fontWeight={400} textTransform="capitalize">
        Categories
     </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
        {categoryDetail}
        </Typography>
    </Stack>   
    </Stack>
  )
}

export default Detail