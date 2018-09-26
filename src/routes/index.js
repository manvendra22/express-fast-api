const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Express" });
// });

/* Authentication */
router.use("/auth", authRoutes);

module.exports = router;
