const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', async (request, response) => {
  response.json({ info: 'The beginings of the amplifire backend API' });
});

app.get('/artists', db.getArtists);
app.get('/albums', db.getAlbums);
app.get('/users', db.getUsers);
app.get('/user/:id', db.getUserById);
app.put('/user/:id', db.updateUser);
app.get('/user/:id/posts', db.getUserPosts);

app.set ('port', ( process.env.PORT || 3000 ));
app.listen( app.get('port'), () => {
  console.log(`App running on port ${port}.`)
})
