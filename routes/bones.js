const express = require('express');
const bonesRoutes = express.Router();

const bonesData = require('../models/bones');


bonesRoutes.get('/', (request, response) => {
  response.render('bones/index.ejs', {
    bones: bonesData,
    documentTitle: "List of all bones"
  });
});

bonesRoutes.get('/:id', (request, response) => {
  let id = request.params.id;
  for (let i = 0; i < bonesData.length; i++) {
    if (id === bonesData[i].name) {
      response.render('bones/single-bone.ejs', {
        documentTitle: bonesData[i].name,
        bone: bonesData[i]
      });
    }
  }
  response.render('bones/single-bone.ejs', {
    documentTitle: bonesData[id].name,
    bone: bonesData[id]
  })
})



module.exports = bonesRoutes;
