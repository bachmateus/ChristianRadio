import { tracksRepository } from "..";
import ToogleMusicFavoriteUseCase from "./ToogleMusicFavoriteUseCase";

const toogleMusicFavoriteUseCase = () => new ToogleMusicFavoriteUseCase(tracksRepository);

export default toogleMusicFavoriteUseCase;