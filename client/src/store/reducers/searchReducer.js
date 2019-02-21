const initState = {
  results: []
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "QUERY_STARTED":
      return {
        ...state,
        loading: true
      };
    case "ADD_QUERY_RESULTS":
      return {
        ...state,
        loading: false,
        results: action.payload.results
      };
    case "QUERY_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
  }
  return state;
};

export default searchReducer;
