const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
    const users = JSON.parse(fs.readFileSync("data/users.json"));
    res.render("index", { title: "Express", users });
});

module.exports = router;
