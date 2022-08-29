import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const PoseCard = ({ pose }) => (
  <Link className="pose-card" to={`/pose/${pose.id}`}>
    <img src={pose.img_url} alt={pose.english_name} loading="lazy" />
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {pose.english_name}<br/>
      {pose.sanskrit_name}
    </Typography>
  </Link>
);

export default PoseCard