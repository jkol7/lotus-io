

require('dotenv').config()
const path = require('path');
const express = require('express')
const axios = require('axios')
const cors = require('cors');


const app = express()

app.use(express.static('client/build'))

app.get('/', (req, res)=> {
    res.send('Working main directory')
});

app.get('/youtube', async (req, res) => {

    const pose = req.query.id + " pose"

    const data = await axios ( {
        
        url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${pose}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
          }
    } )
    res.send(data.data.contents)
})


  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))