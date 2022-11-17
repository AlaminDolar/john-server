const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  res.send("john is running at server by app.get method");
});

app.listen(port, () => {
  console.log("App is listening to 5000", port);
});
