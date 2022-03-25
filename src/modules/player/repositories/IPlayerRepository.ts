import Tracker from "../model/Tracker"

export default interface IPlayerRepository{
  start(): Promise<void>
  togglePlay(isPlaying:boolean): Promise<boolean>
  setPlayerData(playerData: Tracker): Promise<void>
  getPlayerData(): Tracker
}