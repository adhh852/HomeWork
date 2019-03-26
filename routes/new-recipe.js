const express = require('express');
const recipeWeb = require('../recipe-web');
const recipe = require('../recipe');
const router = express.Router();

router.get('/', function(req, res) {
   res.send(recipeWeb.newRecipePage());
});

router.post('/', function(req, res) {
   const titlename = req.body['titlename'];
   const ingredients = req.body['ingredients'];
   const instructions = req.body['instructions'];

   const detail = { title: titlename, ingredient: ingredients, instruction: instructions };
   recipe.addRecipe(detail);
   res.redirect('/detail');
});

module.exports = router;



