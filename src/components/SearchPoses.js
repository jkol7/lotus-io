import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { poseOptions, fetchData } from '../utils/fetchData';
import {HorizontalScrollbar} from './HorizontalScrollbar';

function SearchPoses() {

  const [search, setSearch] = useState('')
  const [poses, setPoses] = useState('')
  const [categories, setCategories] = useState([]);




  useEffect(() => {

    const getCategoryData = async () => {
    const response = await fetch('https://lightning-yoga-api.herokuapp.com/yoga_categories')
    const data = await response.json()
    const categoryData = await data.items.map(item => item.name)
    
    let categoryShortened = []

    for (let item of categoryData){
        let word = item.replace('Yoga', '').replace('Poses', '').trim()
        categoryShortened.push(word)
        }

    setCategories([...categoryShortened])
    }
    getCategoryData()

    }, [])


  const handleSearch = async () => {
    if (search) {
      try {
        
        const response = await fetch('https://lightning-yoga-api.herokuapp.com/yoga_poses')
        const data = await response.json()
        const poseData = data.items

        const searchedPoses = poseData.filter(
          (item) => item.sanskrit_name.toLowerCase().includes(search)
                 || item.english_name.toLowerCase().includes(search)
        );

        console.log(searchedPoses)

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setPoses(searchedPoses);

        
      } catch(error){
        console.log(error)

      }

    }
     /* const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
    */
  }



  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
      Find Your Pose <br />
    </Typography>
    <Box position="relative" mb="72px">
      <TextField
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Poses"
        type="text"
      />
      <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
        Search
      </Button>
    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
    <HorizontalScrollbar data={categories} />
    </Box>
  </Stack>
  )
}

export default SearchPoses