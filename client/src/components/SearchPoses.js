import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

function SearchPoses({ category, setCategory, setPoses }) {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoryData = async () => {
      const response = await fetch("/merged-yoga-poses.json");
      const data = await response.json();

      // Gets all category data to be used in horizontal scrollbar.

      const categoryData = await data.items.map((item) => item.name);

      let categoryShortened = [];

      // Shortens category names because of reduntant use of yoga and poses.

      for (let item of categoryData) {
        let word = item.replace("Yoga", "").replace("Poses", "").trim();
        categoryShortened.push(word);
      }

      setCategories([...categoryShortened]);
    };
    getCategoryData();
  }, []);

  // Sets poses state from search by matching the API pose data

  const handleSearch = async () => {
    if (search) {
      try {
        const response = await fetch("/yoga-poses.json");
        const data = await response.json();
        const poseData = data.items;

        const searchedPoses = poseData.filter(
          (item) =>
            item.sanskrit_name.toLowerCase().includes(search) ||
            item.english_name.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

        setSearch("");
        setPoses(searchedPoses);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Find Your Pose <br />
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Poses"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#3B9AE1",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      </Box>
    </Stack>
  );
}

export default SearchPoses;
