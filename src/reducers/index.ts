import { combineReducers } from "redux";
import { AppReducerTypes } from "./types";
import userReducer from "./userReducer/reducer";
import stationReducer from "./stationReducer/reducer";

export default combineReducers<AppReducerTypes>({
  userReducer,
  stationReducer
});