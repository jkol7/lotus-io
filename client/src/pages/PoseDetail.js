import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import axios from "axios";
import PoseVideos from "../components/PoseVideos";

const PoseDetail = () => {
  const [poseDetail, setPoseDetail] = useState([]);
  const [poseVideos, setPoseVideos] = useState([]);
  const [currentPose, setCurrentPose] = useState([]);
  const [categoryDetail, setCategoryDetail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPoseData = async () => {
      // Gets pose image and category information from Yoga API.

      const data = await fetch("/merged-yoga-poses.json");
      const poseDetailData = await data.json();

      console.log(
        "This is poseDetailData with yoga poses",
        poseDetailData.yoga_poses
      );
      console.log("This is the id", id);

      // Filter the poseDetailData to find the pose with the matching id
      const matchingPose = poseDetailData.yoga_poses.find(
        (pose) => pose.id == id
      );

      setCurrentPose(matchingPose);

      // Get request with Axios because of API keys.
      // Uses the current pose and returns Youtube search data.

      await axios
        .get("/youtube", {
          params: {
            id: currentPose.english_name,
          },
        })
        .then((response) => {
          setPoseVideos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchPoseData();
  }, [id]);

  if (!currentPose) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail
        currentPose={currentPose}
        poseDetail={poseDetail}
        categoryDetail={categoryDetail}
      />
      <PoseVideos
        poseVideos={poseVideos}
        name={currentPose.english_name + " Pose"}
      />
    </Box>
  );
};

export default PoseDetail;
