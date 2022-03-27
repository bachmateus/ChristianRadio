import { FIREBASE_USER_MUSICS } from '@env';
import database from '@react-native-firebase/database';

import Track from "../../../station/model/Track";
import IFavoritesTracksRepository, { ISetMusicAsFavoriteDTO } from "../IFavoritesTracksRepository";

export default class FirebaseFavoritesTracksRepository implements IFavoritesTracksRepository {

  async setMusicAsFavorite({ userKey, music }: ISetMusicAsFavoriteDTO): Promise<boolean> {
    try {
      const newReference = database().ref(FIREBASE_USER_MUSICS).push();
      
      const saveResp = await newReference
        .set({ ...music, userKey, createdAt: Date.now() })
      
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

  async removeMusicFromFavorite(music: Track): Promise<boolean> {
    try {
      const resp = await database().ref(FIREBASE_USER_MUSICS + music.SongCode).remove();

      return false;
    } catch (e) {
      throw new Error(e);
    }
  }
 
  async getFavoriteTrack(userKey: string, songCode: string): Promise<Track> {
    try {
      const allFavorites = await this.getAllFavoritesTracksWithFirebaseKeys(userKey);

      if (!allFavorites)
        return null

      const allFavoritesObjToArray = Object.entries(allFavorites);
        
      const favoritesTrack = allFavoritesObjToArray.filter( (favorite) => {
        const currentData:Track = favorite[1];

        return currentData.SongCode.toString() == songCode;
      });
      // console.log(songCode, favoritesTrack)


      if (favoritesTrack.length === 0)
        return null

      const favoriteTrack = favoritesTrack[0][1] as Track;
      favoriteTrack.SongCode = favoritesTrack[0][0];

      return favoriteTrack
    } catch (e) {
      throw new Error(e);
    }
  }

  async getAllFavoritesTracksWithFirebaseKeys(userKey: string): Promise<Track[]> {
    try {
      const resp = await database().ref(FIREBASE_USER_MUSICS)
      .orderByChild('userKey').equalTo(userKey).once('value');
      
      const favorites = resp.toJSON() as Track[];
  
      return favorites;
    } catch(e) {
      throw new Error(e);
    }
  }

  async getAllFavoritesTracks(userKey:string): Promise<Track[]> {
    try {
      const allFavorites = await this.getAllFavoritesTracksWithFirebaseKeys(userKey);
      
      if (!allFavorites)
        return []

      const allFavoritesObjToArray = Object.entries(allFavorites);

      const favoritesTrack:Track[] = allFavoritesObjToArray.map( 
        (favorite) => favorite[1]
      );

      return favoritesTrack;
    } catch (e) {
      throw new Error(e);
    }
  }

}