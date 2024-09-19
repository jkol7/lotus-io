import { Stack, Typography } from "@mui/material";

const Category = ({ name, setCategory, categoryID, iconType }) => (
  // Sets the Yoga CategoryID when clicking the category card.

  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="category-card"
    sx={{
      background: "#fff",
      borderBottomLeftRadius: "20px",
      width: "270px",
      height: "282px",
      cursor: "pointer",
      gap: "47px",
    }}
    onClick={() => {
      console.log("Category ID", categoryID);
      setCategory(categoryID);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img
      src={iconType}
      alt="core-icon"
      style={{ maxWidth: "75px", maxHeight: "100px" }}
    />
    <Typography
      fontSize="22px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
      textAlign="center"
    >
      {" "}
      {name}
    </Typography>
  </Stack>
);

export default Category;
