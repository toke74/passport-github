const express = require("express");
const routes = require("./routes/routes");
require("./config/passport");

//create app
const app = express();

//create home route
app.get("/", (req, res) => {
  res.send("passport auth with github strategy");
});

//create a middleware for our routes
app.use(routes);

//create port
const port = process.env.PORT || 3000;

//listen to the port
app.listen(port, () => {
  console.log(`you are listening port ${port}`);
});
