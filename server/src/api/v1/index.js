// lib
const express = require("express");
const cors = require("cors");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

// custom
const routes = require("./routes");
const { notFound, errorHandler } = require("./middleware");

const csrfProtection = csrf({ cookie: true });

// object scaffolding
const app = express();

// third party middleware
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// routing
routes.map(
  (route) =>
    routes &&
    routes.length > 0 &&
    app.use(`/api/v1/${route.path}`, route.module)
);

app.use("*", notFound);

// error handling
app.use(errorHandler);

app.use(csrfProtection);

// csrf protection
app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

module.exports = app;
