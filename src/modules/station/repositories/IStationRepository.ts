import Tracker from "../../player/model/Tracker";
import Station from "../model/Station";

export default interface IStationRepository {
  listAll():Promise<Station[]>
  getCurrentTrackPlaying(station:Station): Promise<Tracker>
}