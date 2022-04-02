import Station from "../modules/station/model/Station";
import Track from "../modules/station/model/Track";
import User from "../modules/user/model/User";

export type AppReducerTypes = {
  userReducer: User
  stationReducer: Station
  favoritesReducer: Track[]
}