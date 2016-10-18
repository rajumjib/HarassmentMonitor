var Sequelize = require('sequelize');
//var logger = require("../../config/logger");

// Load configurations
var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

// initialize database connection
//logger.debug('Connecting to engine:'+config.db.dialect+" dbName: "+config.db.name+'...');

var db = new Sequelize(config.db.name, config.db.user, config.db.password, {
	// custom host; default: localhost
	host: config.db.host,

	// custom port; default: 3306
	port: config.db.port,

	// max concurrent database requests; default: 50
	maxConcurrentQueries: 100,

	// the sql dialect of the database
	dialect: config.db.dialect,

	// use pooling in order to reduce db connection overload and to increase speed
	// currently only for mysql and postgresql (since v1.5.0)
	pool: { maxConnections: 5, maxIdleTime: 30 },

	// language is used to determine how to translate words into singular or plural form based on the [lingo project](https://github.com/visionmedia/lingo)
	// options are: en [default], es
	language: 'en',

	//logging: logger.debug
	logging: console.log
});

db.authenticate()
	.then(function (err) {
		console.log('Connection has been established successfully.');
	})
	.catch(function (err) {
		console.log('Unable to connect to the database:', err);
	});

require('./app/models')(db);

db.sync(//{force: true}
)
	.error(function (error) {
		//logger.error(error);
		throw error;
	});

// export connection
exports = module.exports = db;
