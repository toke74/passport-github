const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const keys = require("./keys");
const User = require("../models/user-model");

// used to serialize the user for the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

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
      User.findOne({ githubId: profile.id }).then(user => {
        if (user) {
          //user exist
          console.log("Returning  user is: ", user);
          done(null, user);
        } else {
          new User({
            username: profile.username,
            githubId: profile.id
          })
            .save()
            .then(newUser => {
              console.log("New  user is: ", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
