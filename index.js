const express = require("express")
require("dotenv").config()

const app = express()
const BUSCACURSOS_URL = "https://buscacursos.uc.cl/"

app.get("/", (req, res) => {
    res.send("Todo pasando")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Escuchando en ${process.env.PORT || 3000}`)
})
