import { useCallback } from 'react';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  State,
  usePlaybackState,
} from "react-native-track-player";
import { playlistData } from '../../station/databases/playlist-data';
// import { playlistData } from '../../databases/playlist-data/christian-rock-station.data';
// import { playlistData } from "../../databases/playlist-data";

export default class TrackPlayerService {
  static async setup(): Promise<void> {
    try {
      // this method will only reject if player has not been setup yet
      await TrackPlayer.getCurrentTrack();
    } catch {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        // This flag is now deprecated. Please use the above to define playback mode.
        // stoppingAppPausesPlayback: true,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 2,
      });
    }
  }

  static async setPlayerTracks(): Promise<void> {
    await TrackPlayer.add(playlistData);
    // await TrackPlayer.add(playlistData);
    // await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  }

  static async togglePlayback() {
    const state = usePlaybackState();
    const isPlaying = state === State.Playing;
  
    return useCallback(() => {
      if (isPlaying) {
        TrackPlayer.pause();
      } else {
        TrackPlayer.play();
      }
    }, [isPlaying]);
  }
}