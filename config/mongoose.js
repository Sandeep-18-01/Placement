const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cell");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in database connection!!!"));

db.once("open", () => {
  console.log("Connection to database is succesfull.");
});

module.exports = db;
