import { combineReducers } from "redux";
import { AppReducerTypes } from "./types";

import userReducer from "./userReducer/reducer";
import stationReducer from "./stationReducer/reducer";
import favoritesReducer from "./favoritesReducer/reducer";

export default combineReducers<AppReducerTypes>({
  userReducer,
  stationReducer,
  favoritesReducer
});