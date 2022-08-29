

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())


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


app.get('/easy', async (req, res) => {

        console.log('youre here')
        res.json('Hello')
})



  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))