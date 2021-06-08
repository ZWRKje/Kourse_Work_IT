const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({extended: true}))
app.use("/api/addState", require("./routes/addStateRoute"));
app.use("/api/info",require("./routes/stateinfo"))

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      usedCreateIndex:true
    });
    app.listen(PORT, () =>
      console.log(`Server has been start on port ${PORT}`)
    );
  } catch (e) {
    console.log("Server Err", e.message);
    process.exit(1);
  }
}

start();
