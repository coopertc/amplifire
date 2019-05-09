const Client  = require('pg').Pool;

const client = new Client
({
  connectionString: 'postgres://dbdheidwdrcexm:9871bd5ad3c6bf47e729009968a4e7c80f4c124118b88d680d95e2e6c59a9f2b@ec2-174-129-208-118.compute-1.amazonaws.com:5432/d7fcl8rbk5cc0n',
  ssl: true,
});

/*
client.query('SELECT * FROM users;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/



const getArtists = (request, response) => {
  client.query('SELECT * FROM artist', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAlbums  = (request, response) => {
  client.query('SELECT * FROM album', (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getArtists,
  getAlbums,
}
