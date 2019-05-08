const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./q2')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const { Client } = require('pg');

const client = new Client
({
  connectionString: 'postgres://jxlbvamibcaist:eba35402ee783536d796a517ab6fdaca3af537a9281aac4c44ace60b6d05b758@ec2-184-72-237-95.compute-1.amazonaws.com:5432/demljeimj7bjrj',
  ssl: true,
});

client.connect();

client.query('SELECT * FROM users;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});



app.get('/', (request, response) => {
  console.log('hello')
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

/*
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

*/
app.set ('port', ( process.env.PORT || 3000 ));
app.listen( app.get('port'), () => {
  console.log(`App running on port ${port}.`)
})
