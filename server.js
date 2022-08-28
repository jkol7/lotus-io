import express from 'express'
import cors from "cors"
import dotenv from "dotenv"



const app = express()
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))