const express = require("express");

const app = express();

const mongoose = require("mongoose");

const routing = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


app.use(routing)



mongoose.connect(process.env.MONGODB_URI || "mongodb://Nick:Radioactive235@ds141178.mlab.com:41178/heroku_rdn17l8z");

// "mongodb://localhost/googlebooksReactReading"

app.listen(PORT, function() {
    console.log(`Backend server now listening on PORT ${PORT}!`);
  });