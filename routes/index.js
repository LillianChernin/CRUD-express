const express = require('express');
const indexRoute = express.Router();

indexRoute.get('/', (request, response) => {
  response.render('index.ejs', {
    documentTitle: 'Massage Therapy Database'
  });
});

module.exports = indexRoute;
