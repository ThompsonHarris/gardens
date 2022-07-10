const express = require("express");
const path = require("path");
const apiRouter = require("./api/index");
const { db } = require("./models/index");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const clientDirPath = path.join(__dirname, "../../dist");

const app = express();

app.use(express.json());

app.use(express.static(clientDirPath));

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public"));
});

const startServer = new Promise((res, rej) => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    return res();
  });
});

db.sync()
  .then(() => startServer)
  .then(() => console.log("Application started"))
  .catch((e) => console.log("Error starting server", e));
