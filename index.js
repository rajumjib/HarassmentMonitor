'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = require('./server/app');

var debug = require('debug')('server');

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));
console.log('Server Started. Listening on port: ' + app.get('port'));

module.exports = app;
