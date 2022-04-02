import Track from "../../../station/model/Track";
import IFavoritesTracksRepository from "../../repositories/IFavoritesTracksRepository";

interface IToogleMusiceFavoriteDTO{
  userKey:string 
  music: Track
  favoriteList: Track[]
}


interface IToogleMusiceFavoriteResponse {
  isFavorite: boolean
  data: Track
}

export default class ToogleMusicFavoriteUseCase {
  constructor(private favoriteTracksRepository: IFavoritesTracksRepository){}

  async execute({userKey, music, favoriteList}:IToogleMusiceFavoriteDTO): Promise<IToogleMusiceFavoriteResponse> {
    
    const favoriteTrack = favoriteList.filter(
      fav => {
        return fav.SongCode === music.SongCode
      }
    );
    
    if (favoriteTrack.length > 0) {
      const data = await this.favoriteTracksRepository.removeMusicFromFavorite(favoriteTrack[0]); 
      
      return {
        isFavorite: false,
        data
      }
    } else {
      const data = await this.favoriteTracksRepository.setMusicAsFavorite({userKey, music}); 
      
      return {
        isFavorite: true,
        data
      }
    }
  }
}