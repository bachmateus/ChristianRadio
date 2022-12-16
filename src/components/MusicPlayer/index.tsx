import React from 'react';
import { View } from 'react-native';

import PlayerTrack from '../../modules/player/model/PlayerTrack';
import PlayerButtons from './PlayerButtons';
import PlayerMusicInfo from './PlayerMusicInfo';
import styles from './styles';

export default function MusicPlayer(props: {track: PlayerTrack}) {
  return (
    <View style={styles.playerContainer}>
      <PlayerMusicInfo track={props.track}/>
      <PlayerButtons/>
  </View>
  );
}

