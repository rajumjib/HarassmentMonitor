var constants = require("../../config/constants")['routes'];
var users = require('./user.route');

module.exports = function (app) {

  app.use(constants.users, users);
  //require('./user.routs')(app);
};
