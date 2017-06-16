const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

module.exports = (app) => {
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: 'app/admin/views/layouts/',
        partialsDir: 'app/admin/views/partials/'
    }));
    app.set('view engine', 'handlebars');
    app.set('views', path.resolve('./app/admin/views'));
}