import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, youtubeOptions } from '../utils/fetchData'


const PoseDetail = () => {
  const [poseDetail, setPoseDetail] = useState({});
  const [poseVideos, setPoseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchPoseData = async () => {
      const yogaPoseUrl = ' https://lightning-yoga-api.herokuapp.com/yoga_poses/';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const data = await fetch(`${yogaPoseUrl}/${id}`);
      const poseDetailData = data.json()
      setPoseDetail(poseDetailData.description);

      const poseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${poseDetailData.name} yoga`, youtubeOptions);
      setPoseVideos(poseVideosData.contents);
    }
    fetchPoseData();
  }, [id]);

  if (!poseDetail) return <div>No Data</div>;

};

export default {PoseDetail};