import { useCallback } from 'react';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  State,
  usePlaybackState,
} from "react-native-track-player";
import { playlistData } from '../../station/databases/playlist-data';

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
          Capability.SkipToPrevious,
        ],
        progressUpdateEventInterval: 2,
        notificationCapabilities: [
          Capability.Pause,
          Capability.Play,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ]
      });
    }
  }

  static async setPlayerTracks(): Promise<void> {
    await TrackPlayer.add(playlistData);
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