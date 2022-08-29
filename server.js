

const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')

const app = express()
app.use(cors())
dotenv.config()


app.get('/youtube', async (req, res) => {

    const pose = req.query.id + " pose"

    const data = await axios ( {
        
        url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${pose}`,
        headers: {
            'X-RapidAPI-Key': '148e40854cmsh1b041176a612d3ap1d65c4jsnf57617cc2279',
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