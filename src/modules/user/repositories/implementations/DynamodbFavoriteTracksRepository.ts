import { DYNAMODB_URL } from "@env";
import Track from "../../../station/model/Track";
import IFavoritesTracksRepository, { ISetMusicAsFavoriteDTO } from "../IFavoritesTracksRepository";


export default class DynamodbFavoriteTracksRepository implements IFavoritesTracksRepository {
  async setMusicAsFavorite(iSetMusicAsFavoriteDTO: ISetMusicAsFavoriteDTO): Promise<Track> {
    const {Artist, CD, CDCover, SongCode, Title } = iSetMusicAsFavoriteDTO.music;

    const data = {
      Artist,
      CD,
      CDCover,
      SongCode,
      Title,
      createdAt: Date.now(),
      userKey:iSetMusicAsFavoriteDTO.userKey
    }

    const createResponse = await fetch(DYNAMODB_URL+'user-favorites', {
      method: 'post',
      
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    
    const jsonResponse = await createResponse.json();

    return jsonResponse.createResponse;
  }
  async getAllFavoritesTracks(userKey: string): Promise<Track[]> {
    const endpoint = DYNAMODB_URL + 'favorites/' + userKey;
    const listAllResponse = await fetch(endpoint, {
      method: 'get',
    });
    
    const jsonResponse = await listAllResponse.json();

    return jsonResponse.favorites;
  }
  async getFavoriteTrack(userKey: string, songCode: string): Promise<Track> {
    try {
      const allFavorites = await this.getAllFavoritesTracks(userKey);

      if (!allFavorites)
        return null

      const favorite = allFavorites.filter( favorite => favorite.SongCode===songCode )

      if (favorite.length ===0)
        return null

      return favorite[0];
    } catch (error) {
      console.error(error)
    }
  }
  async removeMusicFromFavorite(music: Track): Promise<Track> {
    
    try {
      const endpoint = DYNAMODB_URL + 'delete-favorite/' + music.id;
      const listAllResponse = await fetch(endpoint, {
        method: 'DELETE'
      });
      
      const jsonResponse = await listAllResponse.json();

      return music;
    } catch (error) {
      console.error(error)
    }
  }

}