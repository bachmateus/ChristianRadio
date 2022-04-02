import { Dispatch } from "redux";
import Track from "../../modules/station/model/Track";
import { FavoritesListAction, FAVORITES_ACTION_TYPES } from "./types";


export const setFavoritesData = (favorites: Track[]) => {
  return (dispach:Dispatch<FavoritesListAction>) => {
    dispach({
      type: FAVORITES_ACTION_TYPES.CHANGE_FAVORITES_DATA,
      favorites
    })
  }
}