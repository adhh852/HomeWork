const express = require('express');
const path = require('path');
const logger = require('morgan');
const PORT = 3000;

const indexRouter = require('./routes/index');
const newRecipeRouter = require('./routes/new-recipe');
const detailRouter = require('./routes/detail');

const server = express();

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/new-recipe', newRecipeRouter);
server.use('/detail', detailRouter);

server.get('/fetch', function(req, res){
   res.send("Hello");
});
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


module.exports = server;
