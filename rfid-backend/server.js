const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Store RFID data
app.post("/rfid", (req, res) => {
  const { tagId } = req.body;
  console.log("Received RFID:", tagId);

  fs.appendFileSync("rfid_data.csv", `${tagId},${new Date().toISOString()}\n`);
  res.json({ message: "RFID saved" });
});

// Serve CSV data for React frontend
app.get("/data", (req, res) => {
  res.sendFile(__dirname + "/rfid_data.csv");
});

app.listen(5000, () => console.log("Server running on port 5000"));
 
