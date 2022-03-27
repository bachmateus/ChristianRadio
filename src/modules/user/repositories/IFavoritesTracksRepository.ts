import Track from '../../station/model/Track';

export interface ISetMusicAsFavoriteDTO {
  userKey: string
  music: Track
} 

export interface ICheckIfIsFavoriteDTO {
  userKey: string
  songCode: string
}

export default interface IFavoritesTracksRepository {
  setMusicAsFavorite(iSetMusicAsFavoriteDTO:ISetMusicAsFavoriteDTO): Promise<boolean>
  getAllFavoritesTracks(userKey:string): Promise<Track[]>
  getFavoriteTrack(userKey: string, songCode: string): Promise<Track|null>
  removeMusicFromFavorite(music: Track): Promise<boolean>
}