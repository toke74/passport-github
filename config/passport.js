const passport = require("passport");
const GithubStrategy = require("passport-github2");

//creating new github strategy instance

passport.use(
  new GithubStrategy(
    {
      // options for github strategy
      clientID: "",
      clientSecret: "",
      callbackURL: ""
    }, //callback function
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
    }
  )
);
