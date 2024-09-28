import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import axios from "axios";
import PoseVideos from "../components/PoseVideos";

const PoseDetail = () => {
  const [poseDetail, setPoseDetail] = useState([]);
  const [poseVideos, setPoseVideos] = useState([]);
  const [currentPose, setCurrentPose] = useState(null);
  const [categoryDetail, setCategoryDetail] = useState("");
  const [poseImages, setPoseImages] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPoseData = async () => {
      // Gets pose image and category information from Yoga API.
      const data = await fetch("/merged-yoga-poses.json");
      const poseDetailData = await data.json();

      // Filter the poseDetailData to find the pose with the matching id
      const matchingPose = poseDetailData.yoga_poses.find(
        (pose) => pose.id == id
      );

      setCurrentPose(matchingPose);
    };

    fetchPoseData();
  }, [id]);

  useEffect(() => {
    // Only make the request to localhost:5000/youtube if currentPose is set
    if (currentPose && currentPose.english_name) {
      console.log("Current Pose is set:", currentPose);
      console.log(
        "Current Pose English Name:",
        currentPose.english_name + " pose"
      );
      const fetchPoseVideos = async () => {
        try {
          const response = await axios.get("http://localhost:5000/youtube", {
            params: {
              query: currentPose.english_name + " pose",
            },
          });
          setPoseVideos(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchPoseVideos();
    } else {
      console.log("Current Pose is not set yet or missing english_name");
      console.log("Current Pose:", currentPose);
    }
  }, [currentPose]);

  if (!currentPose) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail
        currentPose={currentPose}
        poseDetail={poseDetail}
        categoryDetail={categoryDetail}
      />
      {poseVideos && poseVideos.length > 0 && (
        <PoseVideos
          poseVideos={poseVideos}
          name={currentPose.english_name + " Pose"}
        />
      )}
    </Box>
  );
};

export default PoseDetail;
