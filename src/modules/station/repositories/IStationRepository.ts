import Station from "../model/Station";
import Track from "../model/Track";

export default interface IStationRepository {
  listAll():Promise<Station[]>
  getCurrentTrackPlaying(station:Station): Promise<Track>
}