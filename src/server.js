const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/v1/blog', require('./routes/blog.routes'));
app.use(require('./routes/index.routes'));

//404 Handlers
app.use((req, res) => {
    res.status(404).render('404');
});

module.exports = app;