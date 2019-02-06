const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT = 2424
const scoreboard = require('./routes/scoreboard')

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'src')))

app.listen(PORT, () => {
  console.log('Server started on PORT: ', PORT)
})

app.get('/scoreboard', async function(req, res) {
  // let querystring = window.location.search.substring(1)
  // console.log(querystring)
  console.log(req.query.date)
  let response = await scoreboard(req.query.date)
  // return response
  res.status(200)
  return res.json({ response })
})

module.exports = app
