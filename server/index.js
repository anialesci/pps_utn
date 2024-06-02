const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const multer = require('multer');
const session = require("express-session");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const upload = multer({dest:"images/"});

const { list } = require("./endpoints/list");
const { listReceta } = require("./endpoints/listReceta");
const { listStock } = require("./endpoints/listStock");
const { login } = require("./endpoints/login");
const { save } = require("./endpoints/save");
const { saveStock } = require("./endpoints/saveStock");
const {erase} = require("./endpoints/delete");
const {eraseStock} = require("./endpoints/deleteStock");
const {update} = require("./endpoints/update");
const {saveContact} = require("./endpoints/saveContact");

app.get("/api/list", list);
app.get("/api/listReceta", listReceta);
app.get("/api/listStock", listStock);
app.post("/api/login", login);
app.post("/api/save",upload.single('image'), save);
app.delete("/api/delete",erase);
app.delete("/api/deleteStock",eraseStock);
app.post("/api/saveStock",saveStock);
app.post("/api/saveContact",saveContact);
app.put("/api/update",update);
app.use("/images", express.static(path.join(__dirname, "./images"))); // serve the images/ directory as a static directory
app.listen(3400, function () {
  console.log("Listening on port 3400!");
});