import IFavoritesTracksRepository, { ICheckIfIsFavoriteDTO } from "../../repositories/IFavoritesTracksRepository";

export default class CheckIfIsFavorite {
  constructor(private favoriteTracksRepository: IFavoritesTracksRepository){}

  async execute({userKey, songCode}:ICheckIfIsFavoriteDTO): Promise<boolean> {
    const favoriteTrack = await this.favoriteTracksRepository.getFavoriteTrack(
      userKey,
      songCode
    );

    if (favoriteTrack === null) 
      return false
    else 
      return true
  }
}