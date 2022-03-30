import Station from "../../modules/station/model/Station";
import { StationListAction, STATION_ACTION_TYPES } from "./types";


const initalState: Station = {
  stationCode: "",
  name: "none",
  site: "",
  url: "",
  endpoint: "",
  logo: undefined
}

const stationReducer = (state: Station = initalState, action: StationListAction) => {
  switch (action.type) {
    case "CHANGE_STATION_DATA":

      return action.station
  
    default:
      return state
  }
}

export default stationReducer;