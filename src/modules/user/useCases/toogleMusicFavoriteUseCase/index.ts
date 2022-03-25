import FirebaseFavoritesTracksRepository from "../../repositories/implementations/FirebaseFavoritesTracksRepository";
import ToogleMusicFavoriteUseCase from "./ToogleMusicFavoriteUseCase";

const firebaseFavoritesTracksRepository = new FirebaseFavoritesTracksRepository();
const toogleMusicFavoriteUseCase = new ToogleMusicFavoriteUseCase(firebaseFavoritesTracksRepository);

export default toogleMusicFavoriteUseCase;