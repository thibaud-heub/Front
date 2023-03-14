const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET add. */
router.get("/", function (req, res, next) {
    res.render("add");
});

/* POST add. */
router.post("/", function (req, res, next) {
    const users = JSON.parse(fs.readFileSync("./data/users.json"));
    users.push(req.body);
    users[users.length - 1].id = users[users.length - 2].id + 1;
    users[users.length - 1].created_at = new Date();
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
    res.redirect("/");
});

module.exports = router;
