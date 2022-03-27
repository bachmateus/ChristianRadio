import { tracksRepository } from "..";
import CheckIfIsFavorite from "./CheckIfIsFavorite";

const checkIfIsFavorite = new CheckIfIsFavorite(tracksRepository);

export default checkIfIsFavorite;