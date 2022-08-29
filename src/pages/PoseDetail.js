import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../components/Detail'
import axios from 'axios'
import PoseVideos from '../components/PoseVideos'


const PoseDetail = () => {
  const [poseDetail, setPoseDetail] = useState({});
  const [categoryDetail, setCategoryDetail] = useState('')
  const [poseVideos, setPoseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchPoseData = async () => {
      const yogaPoseUrl = ' https://lightning-yoga-api.herokuapp.com/yoga_poses';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const data = await fetch(`${yogaPoseUrl}/${id}`);
      const poseDetailData = await data.json()

      setPoseDetail(poseDetailData)

      let poseCategoryNames = await poseDetailData.yoga_categories.map(item=>item.name).join(', ')
      setCategoryDetail(poseCategoryNames)

      await axios.get('/youtube', {
        params: {
          id: poseDetailData.english_name
        }
      }
      )
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    }
      fetchPoseData();
  }, [id]);

  if (!poseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail poseDetail={poseDetail} categoryDetail={categoryDetail}/>
      <PoseVideos poseVideos={poseVideos} name={poseDetail.english_name + ' Pose'} />
    </Box>
  );
};


export default PoseDetail;