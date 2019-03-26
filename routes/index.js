const express = require('express');
const recipeWeb = require('../recipe-web');
const recipe = require('../recipe');
const router = express.Router();

router.get('/', function(req, res, next) {
  // Enabled
  res.json({body: recipeWeb.mainPage(recipe)});
  // Not Enabled
  res.send(recipeWeb.mainPage(recipe))
});

module.exports = router;
