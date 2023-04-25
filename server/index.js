require('dotenv').config()

const port = process.env.SERVER_PORT

const express = require('express')

const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())




app.listen(() => {
    console.log(`Serving Spencer on port ${port}`)
})