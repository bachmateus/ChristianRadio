import { FIREBASE_USER_MUSICS } from '@env';
import database from '@react-native-firebase/database';

import Track from "../../../station/model/Track";
import IFavoritesTracksRepository, { ISetMusicAsFavoriteDTO } from "../IFavoritesTracksRepository";

const md5 = require('md5');

export default class FirebaseFavoritesTracksRepository implements IFavoritesTracksRepository {

  async setMusicAsFavorite({ userKey, music }: ISetMusicAsFavoriteDTO): Promise<Track> {

    try {
      const newReference = database().ref(FIREBASE_USER_MUSICS).push();
      
      const newFavorite = { 
        ...music, 
        id: md5(`${userKey}-${music.SongCode}`),
        userKey, 
        createdAt: Date.now() 
      };

      const saveResp = await newReference.set(newFavorite)
      
      return newFavorite;
    } catch (e) {
      throw new Error(e);
      // throw new Error('Method setMusicAsFavorite not implemented');
    }
  }

  async removeMusicFromFavorite(music: Track): Promise<Track|null> {
      // throw new Error('Method removeMusicFromFavorite not implemented');
    const favorites = await this.getFavoriteTrackById(music.id);

    try {
      favorites.forEach(async favorite => {
        const resp = await database().ref(FIREBASE_USER_MUSICS + favorite[0]).remove();
      });
      return music;
    } catch (e) {
      throw new Error(e);
    }
  }
  
  async getFavoriteTrackById(musicId:string) {
    // throw new Error('Method getFavoriteTrackById not implemented');
  
      try {
      const resp = await database().ref(FIREBASE_USER_MUSICS)
      .orderByChild('id').equalTo(musicId).once('value');
      
      const favoritesResponse = resp.toJSON() as Track[];

      if ( !favoritesResponse)
        return [];
        
      const favorites = Object.entries(favoritesResponse);
  
      return favorites;
    } catch(e) {
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

      if (favoritesTrack.length === 0)
        return null

      const favoriteTrack = favoritesTrack[0][1] as Track;
      favoriteTrack.SongCode = favoritesTrack[0][0];

      return favoriteTrack
    } catch (e) {
      throw new Error(e);
    }
    // throw new Error('Method getFavoriteTrack not implemented');

  }

  async getAllFavoritesTracksWithFirebaseKeys(userKey: string): Promise<Track[]> {
    // throw new Error('Method getAllFavoritesTracksWithFirebaseKeys not implemented');
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
    // throw new Error('Method getAllFavoritesTracks not implemented');
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