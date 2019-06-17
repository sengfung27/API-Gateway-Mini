var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3001'
const api = apiAdapter(BASE_URL)

router.get('/', (req, res) => {
  api.get('/hello')
    .then(resp => {
      res.send("Forward from / to /hello :" + resp.data)
    })
})

module.exports = router