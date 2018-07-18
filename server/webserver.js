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