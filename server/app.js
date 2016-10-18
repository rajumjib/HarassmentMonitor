var path = require('path');

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');
var session = require('express-session');
//var multer = require('multer');
var errorHandler = require('errorhandler');

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

var app = express();

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.app.sessionSecret
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer());

app.use(config.common.staticClient, express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(methodOverride());

/*
app.get('/', function (req, res) {
  res.send('Server is working. Good Work!');
});
*/

var routes = require('./routes');
app.use('/', routes);
require('./app/routes')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
if ('development' == app.get('env')) {
  app.use(errorHandler());
}


/*
// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

exports = module.exports = app;
