'use strict';

var env = process.env.NODE_ENV || 'development';
var config = require('../../config/di')[env]['user'];
var di = config.repository.location || '../repositories/user.repository';

/**
 * Module dependencies.
 */
var userDependency = require(di);

var userService = {

  /**
  * Create a user
  */
  addNew = function (user, success, error) {
    userDependency.add(user, success, error);
  },

  /**
  * Show the current user
  */
  findById = function (id, success, error) {
    userDependency.findById(id, success, error);
  },

  /**
  * Update a user
  */
  updateById = function (id, user, success, error) {
    userDependency.updateById(id, user, success, error);
  },

  /**
  * Delete a user
  */
  deleteById = function (id, success, error) {
    userDependency.deleteById(id, success, error);
  },

  /**
  * List of Users
  */
  getAll = function (filters, success, error) {
    userDependency.getAll(filters, success, error);
  }
}

module.exports = userService;
