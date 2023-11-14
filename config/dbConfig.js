const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect(process.env.URI).catch((err) => console.log(err.reason));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to database"));

db.once("open", function () {
  console.log("Connected to database db");
});

module.exports = db;
