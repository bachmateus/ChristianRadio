import { tracksRepository } from "..";
import ListFavoriteTracksUseCase from "./ListFavoriteTracksUseCase";

const listFavoriteTracksUseCase = new ListFavoriteTracksUseCase(tracksRepository);

export default listFavoriteTracksUseCase;