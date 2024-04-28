const express = require("express");
const ip = require("ip");
const app = express();
const port = 3000;
const ipAddr = ip.address();

let lastHouseVisited = "Gryffindor";

//app.use("/", require("./routes/start"));
app.use(express.json());
app.use(express.static("public"));

app.get("/tutu", (req, res) => {
  return res.json({ house: lastHouseVisited });
});

app.post("/tutu", (req, res) => {
  lastHouseVisited = req.body.house;
  console.log(lastHouseVisited);
  return res.json({ house: lastHouseVisited });
});

console.log(lastHouseVisited);

const initializeApp = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("Server run : http://" + ipAddr + ":3000");
  });
};

initializeApp();
