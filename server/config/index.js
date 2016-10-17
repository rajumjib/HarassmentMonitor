var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

var common = {
  name: 'Monitoring App',
  root: rootPath,
  cookieName: "monitoringCookie",
  tokenExpiration: 3600000 * 2
}

module.exports = {
  development: {
    common: common,
    loggerLevel: "debug",
    db: {
      host: "localhost",
      port: "3306",
      name: "monitoringdb",
      user: "appuser",
      password: "monitoringuser",
      dialect: "mysql"
    },
    app: {
      port: 8080,
      cookieSecret: "monitoringSecret",
    }
  },
  test: {
    common: common,
    loggerLevel: "info",
    db: {
      dialect: "sqlite"
    },
    app: {
      port: 8080,
      cookieSecret: "monitoringSecret",
    },
  },
  production: {
    common: common,
    loggerLevel: "warning",
    db: {
      dbUrl: 'postgres://' + process.env.USER + ':@localhost:5432/monitoringdb',
      dialect: "pg"
    },
    app: {
      port: 80,
      cookieSecret: "monitoringProduction",
    }
  }
};
