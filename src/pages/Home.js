import React, { useState } from 'react';
import { Box } from '@mui/material';

import Poses from '../components/Poses';
import HeroBanner from '../components/HeroBanner';
import SearchPoses from '../components/SearchPoses'

function Home() {

  const [poses, setPoses] = useState([]);
  const [category, setCategory] = useState([])

  return (
    <Box>
    <HeroBanner/>
    <SearchPoses setCategory={setCategory} poses={poses} setPoses={setPoses} category={category} />
    <Poses setPoses={setPoses} poses={poses} category={category}/>
   </Box>
  )
}

export default Home