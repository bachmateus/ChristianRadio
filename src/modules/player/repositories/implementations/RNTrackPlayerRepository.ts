import TrackPlayer, { Capability, usePlaybackState } from 'react-native-track-player';

import PlayerTrack from "../../model/PlayerTrack";
import IPlayerRepository from "../IPlayerRepository";

export default class RNTrackPlayerRepository implements IPlayerRepository {
  private playerTrack: PlayerTrack = new PlayerTrack();
  private playbackState = usePlaybackState();

  constructor() {}
  
  async setPlayerData(playerData: PlayerTrack): Promise<void> {
    return
    // if (!playerData.url) 
    //   return 

    // const stationHasChanged = this.playerTrack.url != playerData.url;

    // this.playerTrack.id = playerData.id;
    // this.playerTrack.url = playerData.url;
    // this.playerTrack.title = playerData.title;
    // this.playerTrack.artist = playerData.artist;
    // this.playerTrack.artwork = playerData.artwork;

    // if (stationHasChanged)
    //   await this.start();
  }
  
  getPlayerData(): PlayerTrack {
    return this.playerTrack;
  }
  
  async start(): Promise<void> {
    // await TrackPlayer.reset();
    console.log('start')
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
      // c
      // stopWithApp: true,
      // alwaysPauseOnInterruption: true,
      capabilities: [
        Capability.Play,
        Capability.Stop,
        Capability.Pause
      ],
      // compactCapabilities: [
        // TrackPlayer.CAPABILITY_PLAY,
        // TrackPlayer.CAPABILITY_PAUSE,
        // TrackPlayer.CAPABILITY_STOP,
      // ]
    });

    // await TrackPlayer.add(this.playerTrack);

    // const playResp = await TrackPlayer.play();
  }
  
  async togglePlay(isPlaying:boolean): Promise<boolean> {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    
    if ( currentTrack === null) {
      await this.start();
      return true;
    }
    // await TrackPlayer.setupPlayer({});

    if (isPlaying) {
      await TrackPlayer.play();
      return true;
    } else {
      await TrackPlayer.pause();
      return false
    }
  }
  
}