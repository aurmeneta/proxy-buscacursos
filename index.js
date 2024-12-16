require('dotenv').config()

const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const BUSCACURSOS_URL = 'https://buscacursos.uc.cl/'

const app = express()

app.use(cors())

app.use((req, _res, next) => {
  console.log('Request: ' + req.originalUrl)
  next()
})

app.use(createProxyMiddleware({
  target: BUSCACURSOS_URL,
  changeOrigin: true
}))

app.listen(process.env.PORT || 3000, () => {
  console.log(`Proxy listening at ${process.env.PORT || 3000}`)
})
