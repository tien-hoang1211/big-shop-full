const express = require('express');
const midleware = require('./config/midleware');
const controller = require('./app/admin/controllers');
var app = express();
app.use(express.static('../public'));
app.listen(3000, console.log('Server Started!'));

midleware(app);

app.get('/admin', controller.home.index);