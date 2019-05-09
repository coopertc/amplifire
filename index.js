const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

console.log(process.env.DATABASE_URL);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const { Client } = require('pg');

const pool = new Client
({
  connectionString: 'postgres://dbdheidwdrcexm:9871bd5ad3c6bf47e729009968a4e7c80f4c124118b88d680d95e2e6c59a9f2b@ec2-174-129-208-118.compute-1.amazonaws.com:5432/d7fcl8rbk5cc0n',
  ssl: true,
});



.get('/', async (request, response) => {
  console.log('hello')
  const client = await pool.connect()
  const result = await client.query("SELECT * FROM users');
  const results = { 'results': (result) ? result.rows : null };
  res.render('pages/db', results );
  client.release();
});


//app.get('/users', db.getUsers)
/*
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

*/
app.set ('port', ( process.env.PORT || 3000 ));
app.listen( app.get('port'), () => {
  console.log(`App running on port ${port}.`)
})
