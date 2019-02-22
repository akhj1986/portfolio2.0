const axios = require("axios");

export const logToStore = score => {
  console.log(score);
  return {
    type: "LOG_TO_STORE",
    score
  };
};

const postStarted = {
  type: "POST_STARTED"
};

const postSuccess = {
  type: "POST_SUCCESS"
};

const postError = err => {
  console.log("Error:", err);
  return {
    type: "POST_ERROR"
  };
};

export const postScore = (playerName, score) => {
  return dispatch => {
    dispatch(postStarted);
    axios
      .post("https://spaceblocksattack.herokuapp.com/api/scores", {
        name: playerName,
        score: score
      })
      .then(() => {
        dispatch(postSuccess);
      })
      .catch(err => {
        dispatch(postError(err));
      });
  };
};
