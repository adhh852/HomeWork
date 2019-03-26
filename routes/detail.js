const express = require('express');
const recipeWeb = require('../recipe-web');
const recipe = require('../recipe');
const router = express.Router();

router.get('/', function(req, res) {
    const { title } = req.query;
    if (title && recipe.titleList.includes(title)) {
        recipe.recipeList.forEach(function (content) {
            if(content.title === title) {
                res.send(recipeWeb.detailPage(content));
            }
        });
    } else {
        const content = recipe.recipeList[recipe.recipeList.length - 1];
        res.send(recipeWeb.detailPage(content));
    }
});


module.exports = router;