const express = require('express');
const bonesRoutes = express.Router();
const bonesData = require('../models/bones');
const bodyParser = require('body-parser');

bonesRoutes.use(bodyParser.urlencoded({extended: true}));

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


bonesRoutes.post('/', (request, response) => {
  let newPost = request.body;
  newPost.image = '/static/images/skeleton.png';
  console.log(newPost);
  bonesData.push(newPost);
  response.redirect('/bones')
})



module.exports = bonesRoutes;
