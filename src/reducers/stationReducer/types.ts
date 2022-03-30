import Station from "../../modules/station/model/Station"

export enum STATION_ACTION_TYPES {
  CHANGE_STATION_DATA = "CHANGE_STATION_DATA"
}

export type ChangeStationData = {
  type:STATION_ACTION_TYPES.CHANGE_STATION_DATA
  station: Station
}

export type StationListAction = ChangeStationData;