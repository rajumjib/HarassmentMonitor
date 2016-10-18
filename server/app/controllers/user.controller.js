'use strict';

var env = process.env.NODE_ENV || 'development';
var config = require('../../config/di')[env]['user'];
var di = config.service.location || '../services/user.service';

//var logger = require("../../config/logger");
var constants = require("../../config/constants")['display'];

/**
 * Module dependencies.
 */
var userDependency = require(di);
var userMapper = require('../mappers/user.mapper');

var userController = {

  /**
  * Create a user
  */
  add: function (req, res) {
    var user = req.body;

    var success = function (data) {
      res.status(201)
        .json(userMapper.build(data));
    };

    var error = function (error) {
      //logger.error(error);
      res.status(500)
        .json(error);
    };

    userDependency.addNew(user, success, error);
  },

  /**
  * Show the current user
  */
  details: function (req, res) {
    var id = req.params.id;

    var success = function (data) {
      res.status(200)
        .json(userMapper.build(data));
    };

    var error = function (error) {
      //logger.error(error);
      res.status(500)
        .json(error);
    };

    userDependency.findById(id, success, error);
  },

  /**
  * Update a user
  */
  update: function (req, res) {
    var id = req.params.id;
    var user = req.body;

    var success = function (data) {
      res.status(200)
        .json("OK");
    };

    var error = function (error) {
      //logger.error(error);
      res.status(500)
        .json(error);
    };

    userDependency.updateById(id, user, success, error);
  },

  /**
  * Delete a user
  */
  remove: function (req, res) {
    var id = req.params.id;

    var success = function () {
      res.status(200)
        .json("OK");
    };

    var error = function (error) {
      //logger.error(error);
      res.status(500)
        .json(error);
    };

    userDependency.deleteById(id, success, error);
  },

  /**
  * List of Users
  */
  list: function (req, res) {
    var offset = (req.param('offset') > 0 ? req.param('offset') : 1) - 1;
    var limit = (req.param('limit') > 0 ? req.param('limit') : constants.limit);

    var params = {
      offset: offset,
      limit: limit
    };

    var username = req.param("username");
    if (username) {
      params.username = username;
    }

    var success = function (data) {
      data.offset = offset;
      data.limit = limit;
      res.status(200)
        .json(userMapper.buildList(data));
    };

    var error = function (err) {
      //logger.error(error);
      res.status(500)
        .json(err);
    };

    userDependency.getAll(params, success, error);
  }
}

module.exports = userController;
