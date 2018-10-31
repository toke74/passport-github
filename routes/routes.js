const router = require("express").Router();

//auth login route
router.get("/auth/login", (req, res) => {
  res.send("you are logged in");
});

//auth logout route
router.get("/auth/logout", (req, res) => {
  res.send("you are logged out");
});

module.exports = router;
