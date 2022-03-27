import PlayerTrack from "../../player/model/PlayerTrack";
import Station from "../model/Station";

export default interface IStationRepository {
  listAll():Promise<Station[]>
  getCurrentTrackPlaying(station:Station): Promise<PlayerTrack>
}