require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/youtube", async (req, res) => {
  const pose = req.query.query;
  const data = await axios({
    url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${pose}`,
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  });
  res.send(data.data.contents);
});

app.get("/test", (req, res) => {
  res.send("Working");
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static("client/build"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
