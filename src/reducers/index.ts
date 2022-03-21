import { combineReducers } from "redux";
import { AppReducerTypes } from "./types";
import userReducer from "./userReducer/reducer";

export default combineReducers<AppReducerTypes>({
  userReducer
});