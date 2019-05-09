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
/*
app.get('/', async (request, response) => {
  console.log('hello')
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM users");
    const results = { 'results': (result) ? result.rows : null };
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});
*/

app.get('/', db.getUsers)
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
