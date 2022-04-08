import Track from "../../modules/station/model/Track"


export enum FAVORITES_ACTION_TYPES {
  CHANGE_FAVORITES_DATA = "CHANGE_FAVORITES_DATA"
}

export type ChangeFavoritesData = {
  type: FAVORITES_ACTION_TYPES.CHANGE_FAVORITES_DATA,
  favorites: Track[]
}

export type FavoritesListAction = ChangeFavoritesData;