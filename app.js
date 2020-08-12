const app = require('express')();
/* Express app configuration...*/
/* Controllers*/
const indexController = require('./controllers/index.controller');
app.use('/', indexController);
module.exports = app;
