import React, { useEffect, useState } from "react";
import PoseCard from "./PoseCard";
import Loader from "./Loader";
import { Box, Stack, Typography } from "@mui/material";

const Poses = ({ setPoses, poses, category }) => {
  // Sets the specific category data from the API. Starts with core yoga poses shown.

  useEffect(() => {
    const getCategoryData = async () => {
      const response = await fetch("/merged-yoga-poses.json");
      const data = await response.json();

      const filteredPoses = data.yoga_poses.filter((pose) =>
        pose.yoga_category_ids.includes(category + 1)
      );

      setPoses(filteredPoses);
    };
    getCategoryData();
  }, [category]);

  if (!poses.length) return <Loader />;

  return (
    // Maps through poses and creates pose cards with data passed for each.

    <Box id="poses" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      ></Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {poses.map((pose) => (
          <PoseCard key={pose.id} pose={pose}></PoseCard>
        ))}
      </Stack>
    </Box>
  );
};

export default Poses;
