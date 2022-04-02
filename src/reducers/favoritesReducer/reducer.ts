import Track from "../../modules/station/model/Track";
import { FavoritesListAction } from "./types";

const favoritesReducer = (state: Track[] = [], action: FavoritesListAction) => {
  switch (action.type) {
    case 'CHANGE_FAVORITES_DATA':
      return action.favorites;

    default: 
      return state;
  }
}

export default favoritesReducer;