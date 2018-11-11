const express = require("express");
const CookieSession = require("cookie-session");
const passport = require("passport");
const routes = require("./routes/routes");
const keys = require("./config/keys");
require("./config/passport");
const profileRoute = require("./routes/profile_route");
const mongoose = require("mongoose");

//create app
const app = express();

//set up session cookies
app.use(
  CookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [keys.session.cookiesKeys]
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//create db connection
mongoose.connect(
  keys.mongodb,
  { useNewUrlParser: true },
  () => {
    console.log("mongodb is connected");
  }
);

// set view engine
app.set("view engine", "ejs");

// create home route
app.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

//create a middleware for our routes
app.use(routes);
app.use(profileRoute);

//create port
const port = process.env.PORT || 3000;

//listen to the port
app.listen(port, () => {
  console.log(`you are listening port ${port}`);
});
