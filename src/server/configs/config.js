import _ from "lodash";

let config = {
  dev: "development",
  prod: "production",
  test: "testing",
  logging: false,
  port: parseInt(process.env.PORT, 10) || 8080,
  expireTime: 24 * 60 * 10, // 10 days
  secrets: {
    jwt: process.env.JWT_SECRET || "demoapp",
  },
  database: {
    url: "mongodb://localhost:27017/cinema-app",
    CREATE: 0,
    DROP_CREATE: 1,
  },
};

// check to see if the NODE_ENV was set, if not, the set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
// set config.env to whatever the NODE_ENV is
config.env = process.env.NODE_ENV;

// load up development.js || testing.js || production.js
// all which have they're own configs that may change and add values

let envConfig = require("./" + config.env);

// merge the two objects and export it so our app can use it
module.exports = _.merge(config, envConfig || {});
