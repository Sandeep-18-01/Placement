const mongoose = require("mongoose");

// Set the strictQuery option to avoid the deprecation warning
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost/cell", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in database connection!!!"));

db.once("open", () => {
  console.log("Connection to the database is successful.");
});

module.exports = db;
