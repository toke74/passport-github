const express = require("express");

//create app
const app = express();

//create home route
app.get("/", (req, res) => {
  res.send("passport auth with github strategy");
});

//create port
const port = process.env.PORT || 3000;

//listen to the port
app.listen(port, () => {
  console.log(`you are listening port ${port}`);
});
