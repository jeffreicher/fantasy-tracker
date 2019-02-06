var express = require('express')
var router = express.Router()
const scoreboard = require('./scoreboard')

router.get('/', function(req, res) {
  scoreboard(res, req)
})

module.exports = router
