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
  let response = await scoreboard()
  // return response
  res.status(200)
  res.json({ message: 'hello', response: response })
  res.end()
})

module.exports = app
