import TrackPlayer from 'react-native-track-player';

import Tracker from "../../model/Tracker";
import IPlayerRepository from "../IPlayerRepository";

export default class RNTrackPlayerRepository implements IPlayerRepository {
  private tracker: Tracker = new Tracker();

  constructor() {}
  
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
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ]
    });

    await TrackPlayer.add(this.tracker);

    const playResp = await TrackPlayer.play();
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