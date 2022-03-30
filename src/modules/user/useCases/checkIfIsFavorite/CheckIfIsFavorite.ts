import IFavoritesTracksRepository, { ICheckIfIsFavoriteDTO } from "../../repositories/IFavoritesTracksRepository";

export default class CheckIfIsFavorite {
  constructor(private favoriteTracksRepository: IFavoritesTracksRepository){}

  async execute({userKey, songCode}:ICheckIfIsFavoriteDTO): Promise<boolean> {
    try {

      if (userKey === undefined) 
        return false
      
      const favoriteTrack = await this.favoriteTracksRepository.getFavoriteTrack(
        userKey,
        songCode
        );
        
        if (favoriteTrack === null) 
        return false
        else 
        return true
    } catch (e) {
      console.log('error', userKey, e)
      return false
    }
  }
}