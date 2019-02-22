import cubeReducer from "./cubeReducer";
import searchReducer from "./searchReducer";
import spaceBlocksReducer from "./scoreReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cube: cubeReducer,
  search: searchReducer,
  spaceBlocks: spaceBlocksReducer
});

export default rootReducer;
