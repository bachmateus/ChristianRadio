import TrackPlayer, { Capability } from 'react-native-track-player';

import Tracker from "../../model/Tracker";
import IPlayerRepository from "../IPlayerRepository";

export default class RNTrackPlayerRepository implements IPlayerRepository {
  constructor(private tracker?: Tracker) {}
  
  async setPlayerData(playerData: Tracker): Promise<void> {
    const stationHasChanged = this.tracker.id != playerData.id;

    this.tracker.id = playerData.id;
    this.tracker.url = playerData.url;
    this.tracker.title = playerData.title;
    this.tracker.artist = playerData.artist;
    this.tracker.artwork = playerData.artwork;

    if (stationHasChanged)
      await this.start();
  }
  
  getPlayerData(): Tracker {
    return this.tracker;
  }
  
  async start(): Promise<void> {
    await TrackPlayer.reset();
    
    await TrackPlayer.setupPlayer({});

    await TrackPlayer.updateOptions({
      stopWithApp: true,
      alwaysPauseOnInterruption: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
      ]
    });

    await TrackPlayer.add(this.tracker);

    const playResp = await TrackPlayer.play();
    console.log(playResp);
  }
  
  async togglePlay(isPlaying:boolean): Promise<boolean> {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    
    if ( currentTrack === null) {
      this.start();
      return true;
    }

    if (isPlaying) {
      await TrackPlayer.play();
      return true;
    } else {
      await TrackPlayer.pause();
      return false
    }
  }
  
}