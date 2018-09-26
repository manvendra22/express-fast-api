const express = require("express");
const router = express.Router();

const auth = require("./auth");

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Express" });
// });

/* Authentication */
router.use("/auth", auth);

module.exports = router;
