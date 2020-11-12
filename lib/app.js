const express = require('express');
const app = express();

app.use(require('cors')({
  origin: true,
  //credentials allows us to accept cookies
  credentials: true
}));

app.use(express.json());

app.use('/api/v1/auth', require('./controllers/auth'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
