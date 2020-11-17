const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booksearchdb', { useNewUrlParser: true, useUnifiedTopology: true })

// Define API routes here

// Send every other request to the React app

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
