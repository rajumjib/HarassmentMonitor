var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

var common = {
  name: 'Monitoring App',
  root: rootPath,
  cookieName: "monitoringCookie",
  tokenExpiration: 3600000 * 2,
  staticClient: '/client',
}

var mssql = {
  host: "localhost",//+'\SQLEXPRESS',
  port: "45985",
  name: "CautionCollision",
  user: "sa",
  password: "sa1234",
  dialect: "mssql"
};

var mysql = {
  host: "localhost",
  port: "3306",
  name: "monitoringdb",
  user: "appuser",
  password: "monitoringuser",
  dialect: "mysql"
};

module.exports = {
  development: {
    common: common,
    loggerLevel: "debug",
    db: mssql,
    app: {
      port: 8080,
      cookieSecret: "monitoringSecret",
      sessionSecret: "monitoringSecret",
    }
  },
  test: {
    common: common,
    loggerLevel: "info",
    db: {
      storage: './database/db.sqlite',
      dialect: "sqlite"
    },
    app: {
      port: 8080,
      cookieSecret: "monitoringSecret",
      sessionSecret: "monitoringSecret",
    },
  },
  production: {
    common: common,
    loggerLevel: "warning",
    db: {
      dbUrl: 'postgres://' + process.env.USER + ':@localhost:5432/monitoringdb',
      dialect: "postgres"
    },
    app: {
      port: 80,
      cookieSecret: "dtk;rtdu56987kjnxdf;,;67fgvk",
      sessionSecret: "bbkghko08766dgvh/l-=65ghbhj",
    }
  }
};

//'postgres://user:pass@example.com:5432/dbname'
//'mysql://localhost:3306/database'