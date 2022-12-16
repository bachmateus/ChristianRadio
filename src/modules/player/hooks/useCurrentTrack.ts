import { useState, useEffect } from 'react';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';
import type { Track } from 'react-native-track-player';

interface ICurrentTrack {
  track: Track | undefined,
  index: number | undefined
}

export const useCurrentTrack = (): ICurrentTrack => {
  const [index, setIndex] = useState<number | undefined>();
  const [track, setTrack] = useState<Track | undefined>();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async ({ nextTrack }) => {
    setIndex(nextTrack);
  });

  useEffect(() => {
    // console.log(track)
    if (index === undefined) return;
    (async () => {
      const track = await TrackPlayer.getTrack(index);
      setTrack(track || undefined);
    })();
  }, [index]);

  return { track, index };
};
