import Track from "../../../station/model/Track";
import IFavoritesTracksRepository from "../../repositories/IFavoritesTracksRepository";

export default class ListFavoriteTracksUseCase {
  constructor(private favoriteTracksRepository: IFavoritesTracksRepository){}

  async execute(userKey:string): Promise<Track[]> {
    const favoriteTracks = await this.favoriteTracksRepository
      .getAllFavoritesTracks(userKey);

    return favoriteTracks;
  }
}