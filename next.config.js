const { parsed: myEnv } = require("dotenv").config({
  path: "./.env",
});

module.exports = {
  env: {
    API_URL: myEnv.API_URL,
  },
};
