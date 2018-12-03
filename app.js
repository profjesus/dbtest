const store = require('./db')

const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const app = express();

// const {getHomePage} = require('./routes/index');
const port = 8000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
// const db = mysql.createConnection ({
//     host: 'localhost',
//     user: 'nodeuser',
//     password: 'nodepass',
//     database: 'nodetest'
// });

// connect to database
// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to database');
// });
// global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.use(bodyParser.json()); // parse form data client
app.use(express.static('public')); // configure express to use public folder

// routes for the app
// app.get('/', getHomePage);

app.get('/products', (req,res) => {
  store.getProducts().then((result) => res.send(result));
})
app.post('/createProduct', (req, res) => {
  store
    .createProduct({
      name: req.body.name,
      section: req.body.section
    })
    .then(() => res.sendStatus(200));
});

/*app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);
*/

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
