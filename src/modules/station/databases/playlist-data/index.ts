import { Track } from "react-native-track-player";
import { christianRockDotNetStations } from "./christian-rock-station.data";

export const stationsList = [
  ...christianRockDotNetStations
]

export const playlistData = stationsList.map( station => ({ 
  url: station.url,
  artist: station.name,
  artwork: station.thumb,
  title: station.name,
})) as Track[];


