import { Dispatch } from "react";
import Station from "../../modules/station/model/Station";
import { StationListAction, STATION_ACTION_TYPES } from "./types";

export const setStationData = (station:Station) => {
  return (dispatch:Dispatch<StationListAction>) => {
    dispatch({
      station,
      type: STATION_ACTION_TYPES.CHANGE_STATION_DATA
    })
  }
}