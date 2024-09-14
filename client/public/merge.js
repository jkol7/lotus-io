const fs = require("fs");

// Read the contents of yoga-poses.json and yoga-categories.json
const posesData = fs.readFileSync(
  "/Users/johnkolcun/Desktop/lotus-io/client/public/yoga-poses.json",
  "utf8"
);
const categoriesData = fs.readFileSync(
  "/Users/johnkolcun/Desktop/lotus-io/client/public/yoga-categories.json",
  "utf8"
);

// Parse the JSON data into objects
const poses = JSON.parse(posesData);
const categories = JSON.parse(categoriesData);

// Iterate over the yoga poses
poses.yoga_poses.forEach((pose) => {
  // Find the corresponding categories for each pose
  const matchingCategories = categories.filter((category) => {
    return pose.yoga_category_ids.includes(category.id);
  });

  // Add the categories to the pose object
  pose.categories = matchingCategories;
});

// Write the merged data to a new JSON file
const mergedData = { yoga_poses: poses.yoga_poses };
fs.writeFileSync(
  "/Users/johnkolcun/Desktop/lotus-io/client/public/merged-yoga-poses.json",
  JSON.stringify(mergedData, null, 2)
);

console.log("Merged data has been written to merged-yoga-poses.json");
