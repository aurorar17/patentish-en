const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); // Permette la comunicazione tra il frontend e il backend

app.get("/", (req, res) => {
  res.send("API Backend in esecuzione!");
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
