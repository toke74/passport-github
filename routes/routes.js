const router = require("express").Router();
const passport = require("passport");

//auth login route
router.get("/auth/login", (req, res) => {
  res.send("you are logged in");
});

//auth logout route
router.get("/auth/logout", (req, res) => {
  res.send("you are logged out");
});

//Use passport.authenticate(), specifying the 'Github' strategy, to authenticate requests
router.get("/auth/github", passport.authenticate("github", { scope: profile }));

module.exports = router;
