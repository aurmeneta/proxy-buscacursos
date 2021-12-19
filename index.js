const express = require('express')
require('dotenv').config()
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const app = express()
const BUSCACURSOS_URL = 'https://buscacursos.uc.cl/'

// Middleware para logging
app.use((req, _res, next) => {
  console.log('Request: ' + req.originalUrl)
  next()
})

// CORS
app.use(cors())

// Proxy
app.use(createProxyMiddleware({ target: BUSCACURSOS_URL, changeOrigin: true }))

// Iniciar app
app.listen(process.env.PORT || 3000, () => {
  console.log(`Escuchando en ${process.env.PORT || 3000}`)
})
