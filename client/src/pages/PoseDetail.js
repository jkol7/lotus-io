import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import axios from "axios";
import PoseVideos from "../components/PoseVideos";

const PoseDetail = () => {
  const [poseDetail, setPoseDetail] = useState({});
  const [categoryDetail, setCategoryDetail] = useState("");
  const [poseVideos, setPoseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPoseData = async () => {
      // Gets pose image and category information from Yoga API.

      const yogaPoseUrl = "yoga-poses.json";

      const data = await fetch(`${yogaPoseUrl}/${id}`);
      const poseDetailData = await data.json();

      setPoseDetail(poseDetailData);

      let poseCategoryNames = await poseDetailData.yoga_categories
        .map((item) => item.name)
        .join(", ");
      setCategoryDetail(poseCategoryNames);

      // Get request with Axios because of API keys.
      // Uses the current pose and returns Youtube search data.

      await axios
        .get("/youtube", {
          params: {
            id: poseDetailData.english_name,
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

  if (!poseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail poseDetail={poseDetail} categoryDetail={categoryDetail} />
      <PoseVideos
        poseVideos={poseVideos}
        name={poseDetail.english_name + " Pose"}
      />
    </Box>
  );
};

export default PoseDetail;
