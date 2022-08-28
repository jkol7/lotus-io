import React, { useState } from 'react';
import { Box } from '@mui/material';

import Poses from '../components/Poses';
import HeroBanner from '../components/HeroBanner';
import SearchPoses from '../components/SearchPoses'

function Home() {

  const [poses, setPoses] = useState([]);
  const [categories, setCategories] = useState('all');


  return (
    <Box>
    <HeroBanner setPoses={setPoses} categories={categories} setCategories={setCategories} />
    <SearchPoses setCategories={setCategories} poses={poses} categories={categories} />
    <Poses />
   </Box>
  )
}

export default Home