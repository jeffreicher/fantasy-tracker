const express = require('express')
// const mysql = require('mysql');
const nba = require('nba.js').default
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = 2424
// const credentials = require('./config/mysqlCredentials');
const NBA = require('nba')
const curry = NBA.findPlayer('Stephen Curry')
console.log(curry)

async function stats() {
  let val = 1
  console.log(val)
  const ress = await nba.stats
    .allPlayers({ IsOnlyCurrentSeason: 0 })
    .then(data => {
      res.status(200).json({ Success: true, games: data })
      return data
    })
    .catch(err => {
      res.status(404).json({ Success: false, Message: '404 Not Found!' })
      return err
    })
  console.log(ress)
}

stats()

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

// const connection = mysql.createConnection(credentials);

// connection.connect((err) => {
//     if (err) {
//         console.log('There was an error: ', err)
//     } else {
//         console.log('Connected to database');
//     }
// });

// async function getStats() {
//   try {
//     let res = await nba.stats.allPlayers(res => {
//       console.log(res)
//     })
//     console.log(res)
//   } catch (e) {
//     console.log(e)
//   }
//   //   console.log(res)
// }

// getStats()

// const stats = nba.stats
//   .allPlayers({ IsOnlyCurrentSeason: 0 })
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

// console.log(stats)

// let standings = nba.data.standings((err, res) => {
//   if (err) {
//     console.error(err)
//     return
//   }

//   console.log(res)
// })

// console.log(nba.stats.allPlayers().then(data => {
//     res.status(200).
// }))
// console.log(standings)
app.use(express.static(path.join(__dirname, '..', 'src')))

app.listen(PORT, () => {
  console.log('Server started on PORT: ', PORT)
})

module.exports = app

// app.get('/games/:day', (req,res) => {
//     nba.data.scoreboard({date: req.params.day}).then(data => {
//         res.status(200).json({"Success": true, "games": data})
//     }).catch(err => {
//         res.status(404).json({"Success": false, "Message": "404 Not Found!"})
//     })
// });

// app.get('/calendar', (req,res) => {
//     nba.data.calendar().then(data => {
//       res.status(200).json({"Success": true, "calendar": data})
//     }).catch(err => {
//       res.status(404).json({"Success": false, "Message": "404 Not Found!"})
//     })
// });

// app.get('/', (req,res) => {
//     nba.data.conferenceStandings().then(data => {
//       res.status(200).json({"Success": true, "games": data})
//     }).catch(err => {
//       res.status(404).json({"Success": false, "Message": "404 Not Found!"})
//     })
// });
