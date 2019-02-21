const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const corsOptions = {
  origin: function(origin, callback) {
    if (origin === "http://alexhj.com") {
      callback(null, true);
    } else {
      console.log("ORIGIN ERROR", origin);
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors(corsOptions));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://alexhj.com");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(bodyParser.json());

Score = require("./models/score");

mongoose.connect(
  "mongodb+srv://akhj1986:newroute@cluster0-tewwf.mongodb.net/SpaceGame",
  { useNewUrlParser: true }
);

app.get("/", (req, res) => {
  res.send("Trying CORS again!!");
});

app.get("/api/scores", (req, res) => {
  Score.getScores((err, scores) => {
    if (err) {
      throw err;
    }
    res.json(scores);
  });
});

app.post("/api/scores", (req, res) => {
  const score = req.body;
  Score.addScore(score, (err, score) => {
    if (err) {
      throw err;
    }
    res.json(score);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
