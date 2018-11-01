const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const keys = require("./keys");

//creating new github strategy instance
passport.use(
  new GithubStrategy(
    {
      // options for github strategy
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
      callbackURL: "/auth/github/callback"
    }, //callback function
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
    }
  )
);
