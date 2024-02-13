const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const { list } = require("./endpoints/list");
const { isAuthenticated } = require("./middlewares/isAuthenticated");
app.use(express.json());

app.use(cors());
app.get("/api/list", list);
app.use("/images", express.static(path.join(__dirname, "images"))); // serve the images/ directory as a static directory
app.listen(3400, function () {
  console.log("Listening on port 3400!");
});
