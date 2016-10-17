'use strict';

var env = process.env.NODE_ENV || 'development';
var config = require('../../config/di')[env]['user'];
var di = config.controller.location || '../controllers/';

var constants = require("../../config/constants")['routes']['user'];

/**
 * Module dependencies.
 */
var userDependency = require(di + 'user.controller');

var express = require('express');
var router = express.Router();

router.get('/', userDependency.list);
router.post('/', userDependency.add);

router.get('/:userId', userDependency.details);
router.put('/:userId', userDependency.update);
router.patch('/:userId', userDependency.update);
router.delete('/:userId', userDependency.remove);

module.exports = router;

/*
var userRoute = function(app) {
	// User Routes
	app.route(constants.users)
		.get(userDependency.list)
		.post(userDependency.add);

	app.route(constants.users + '/:userId')
		.get(userDependency.details)
		.put(userDependency.update)
		.delete(userDependency.remove);
};

module.exports = userRoute;
*/


