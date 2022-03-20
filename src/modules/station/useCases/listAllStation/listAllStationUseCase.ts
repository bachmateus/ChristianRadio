import IStationRepository from "../../repositories/IStationRepository";

export default class ListAllStationUseCase {
  constructor(
    private stationRepository: IStationRepository
  ){}

  async execute() {
    try {
      const stations = await this.stationRepository.listAll();
      return stations;
    } catch (e) {
      console.error(e)
    }
  }
}