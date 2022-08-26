import React, { useState } from 'react';
import { Box } from '@mui/material';

import Poses from '../components/Poses';
import SearchPoses from '../components/SearchPoses';
import HeroBanner from '../components/HeroBanner';

function Home() {

  const [poses, setPoses] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
    <HeroBanner />
    <SearchPoses setPoses={setPoses} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Poses setPoses={setPoses} poses={poses} bodyPart={bodyPart} />
   </Box>
  )
}

export default Home