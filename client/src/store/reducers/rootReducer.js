import cubeReducer from "./cubeReducer";
import searchReducer from "./searchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cube: cubeReducer,
  search: searchReducer
});

export default rootReducer;
