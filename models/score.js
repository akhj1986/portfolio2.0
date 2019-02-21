const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  score: {
    type: Number,
    require: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Score = (module.exports = mongoose.model("Score", scoreSchema));

//Get scores

module.exports.getScores = (callback, limit) => {
  Score.find(callback).limit(limit);
};

//Add scores

module.exports.addScore = (score, callback) => {
  Score.create(score, callback);
};
