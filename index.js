const express = require('express')
const connection = require('./src/database')
const Place = require('./src/models/place')

const app = express()

app.use(express.json()) //obrigatório

connection.authenticate()
connection.sync({alter: true})



app.listen(3333, () => {
    console.log("Servidor online")
})