require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "dev",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  // db connection
  // dbConnection: () => {},
};
