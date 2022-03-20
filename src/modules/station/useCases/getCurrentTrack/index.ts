import ChristianRockRepository from "../../repositories/implementations/ChristianRockRepository"
import GetCurrentTrackUseCase from "./getCurrentTrackUseCase";

export default function getCurrentTrackUseCaseInstance() {
  const christianRockRepository = new ChristianRockRepository();
  const getCurrentTrackUseCase = new GetCurrentTrackUseCase(christianRockRepository);

  return getCurrentTrackUseCase;
}