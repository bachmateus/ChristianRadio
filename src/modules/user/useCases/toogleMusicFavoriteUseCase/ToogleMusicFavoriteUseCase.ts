import IFavoritesTracksRepository, { ISetMusicAsFavoriteDTO } from "../../repositories/IFavoritesTracksRepository";

export default class ToogleMusicFavoriteUseCase {
  constructor(private favoriteTracksRepository: IFavoritesTracksRepository){}

  async execute({userKey, music}:ISetMusicAsFavoriteDTO) {
    const favoriteTrack = await this.favoriteTracksRepository.getFavoriteTrack(
      userKey,
      music.SongCode.toString()
    );

    
    if (favoriteTrack === null) 
      return this.favoriteTracksRepository.setMusicAsFavorite({userKey, music});
    
    // console.log(favoriteTrack.Title,music.Title)
    return this.favoriteTracksRepository.removeMusicFromFavorite(favoriteTrack);
  }
}