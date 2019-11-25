import express from 'express';

const app = express();
const port = 3000;

// require the database library (which instantiates a connection to mongodb)
require('./util/mongo');

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Welcome to Fliqpay Dashboard App! Server is listening on ${port}`);
});