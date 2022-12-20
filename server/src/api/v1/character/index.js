// lib
const router = require("express").Router();

// custom
const { list, detail } = require("./controller");
const { idValidator } = require("./validator");
const validate = require("../validator");

// routes
router.get("/", list);

router.get("/:id", idValidator, validate, detail);

module.exports = router;
