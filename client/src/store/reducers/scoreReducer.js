const initState = {
  score: 0,
  playerName: "",
  submitting: false,
  toTable: false,
  errRender: false
}

const scoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOG_TO_STORE":
      return {
        ...state,
        score: action.score
      }
    case "POST_STARTED":
      return {
        ...state,
        submitting: true
      }
    case "POST_SUCCESS":
      return {
        ...state,
        playerName: "",
        score: 0,
        submitting: false,
        toTable: true
      }
    case "POST_ERROR":
      return {
        ...state,
        playerName: "",
        submitting: false,
        errRender: true
      }
    default:
  }
  return state
}

export default scoreReducer
