import React from "react";
import { Typography, Box, Stack } from "@mui/material";

// Maps through poseVideos from Youtube API to create pose video section.

const PoseVideos = ({ poseVideos, name }) => {
  console.log("The pose videos", poseVideos);

  // Filter the poseVideos array to only include objects with a video property
  let filteredPoseVideos = poseVideos?.filter((item) => item.video);

  console.log("The filtered pose videos", filteredPoseVideos);

  console.log(
    "The pose sliced",
    filteredPoseVideos?.slice(0, 6).map((item) => item.video.videoId)
  );
  console.log("The pose name", name);

  return (
    <Box sx={{ marginTop: { lg: "0px", xs: "30px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#3B9AE1", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        videos
      </Typography>
      {filteredPoseVideos && filteredPoseVideos.length > 0 && (
        <Stack
          sx={{
            flexDirection: { lg: "row" },
            gap: { lg: "110px", xs: "25px" },
          }}
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
        >
          {filteredPoseVideos.slice(0, 6).map((item, index) => (
            <a
              key={index}
              className="pose-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="video-img"
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "24px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title
                    .split("")
                    .splice(0, 20)
                    .join("")
                    .concat("...")}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default PoseVideos;
