const express = require('express');
// const mysql = require('mysql');
const nba = require('nba.js').default;
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 2424;
// const credentials = require('./config/mysqlCredentials');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// const connection = mysql.createConnection(credentials);

// connection.connect((err) => {
//     if (err) {
//         console.log('There was an error: ', err)
//     } else {
//         console.log('Connected to database');
//     }
// });

app.use(express.static(path.join(__dirname, '..', 'src')));

app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});

app.get('/games/:day', (req,res) => {
    nba.data.scoreboard({date: req.params.day}).then(data => {
        res.status(200).json({"Success": true, "games": data})
    }).catch(err => {
        res.status(404).json({"Success": false, "Message": "404 Not Found!"})
    })
});
  
app.get('/calendar', (req,res) => {
    nba.data.calendar().then(data => {
      res.status(200).json({"Success": true, "calendar": data})
    }).catch(err => {
      res.status(404).json({"Success": false, "Message": "404 Not Found!"})
    })
});

app.get('/standings', (req,res) => {
    nba.data.conferenceStandings().then(data => {
      res.status(200).json({"Success": true, "games": data})
    }).catch(err => {
      res.status(404).json({"Success": false, "Message": "404 Not Found!"})
    })
});
