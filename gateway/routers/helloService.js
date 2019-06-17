var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3001'
const api = apiAdapter(BASE_URL)

router.get('/hello', (req, res) => {
  api.get(req.path).then(resp => {
    res.send("Response from service: " + resp.data)
  })
})

module.exports = router