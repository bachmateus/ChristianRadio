import PlayerTrack from "../model/PlayerTrack"

export default interface IPlayerRepository{
  start(): Promise<void>
  togglePlay(isPlaying:boolean): Promise<boolean>
  setPlayerData(playerData: PlayerTrack): Promise<void>
  getPlayerData(): PlayerTrack
}