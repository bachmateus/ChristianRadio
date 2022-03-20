import Station from "../../model/Station";
import IStationRepository from "../../repositories/IStationRepository";


export default class GetCurrentTrackUseCase {
  constructor(
    private stationRepository: IStationRepository
  ){}

  async execute(station:Station) {
    const currentTrack = await this.stationRepository.getCurrentTrackPlaying(station)

    return currentTrack;
  }
}