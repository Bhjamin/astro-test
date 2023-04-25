require('dotenv').config()

const port = process.env.SERVER_PORT

const express = require('express')

const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {addToDo, getToDo, clearList, updateToDo} = require('./controller')

app.post('/addToDo', addToDo)
app.get('/getToDo', getToDo)
app.delete('/clearList', clearList)
app.put('/updateToDo', updateToDo)

app.listen(port, () => {
    console.log(`Serving Spencer on port ${port}`)
})