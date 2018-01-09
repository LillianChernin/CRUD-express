const express = require('express');
const musclesRoutes = express.Router();

const musclesData = require('../models/muscles');

musclesRoutes.get('/', (request, response) => {
  response.render('muscles/index.ejs', {
    documentTitle: 'List of all muscles',
    muscles: musclesData
  });
});

musclesRoutes.get('/:id', (request, response) => {
  let id = request.params.id;
  for (let i = 0; i < musclesData.length; i++) {
    if (id === musclesData[i].name) {
      response.render('muscles/single-muscle.ejs', {
        documentTitle: musclesData[i].name,
        muscle: musclesData[i]
      });
    }
  }
  response.render('muscles/single-muscle.ejs', {
    documentTitle: musclesData[id].name,
    muscle: musclesData[id]
  });
});

module.exports = musclesRoutes;
