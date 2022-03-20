import ChristianRockRepository from "../../repositories/implementations/ChristianRockRepository"
import ListAllStationUseCase from "./listAllStationUseCase";

const christianRockRepository = new ChristianRockRepository();
const listAllStationUseCase = new ListAllStationUseCase(christianRockRepository);

export default listAllStationUseCase;