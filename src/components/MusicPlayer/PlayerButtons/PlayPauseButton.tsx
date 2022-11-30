import React, { useMemo } from 'react';
import { ImageSourcePropType } from 'react-native';
import { State, usePlaybackState } from 'react-native-track-player';
import { playerIcons } from '../../../assets/icons';
import { useOnTogglePlayback } from '../../../modules/player/hooks';
import styles from '../styles';
import Button from './Button';

export default function PlayPauseButton () {
  const handleOnPress = useOnTogglePlayback();
  const state = usePlaybackState();
  
  const buttonIcon = useMemo(() => {
    if (state === State.Playing)
      return playerIcons.pause
    else
      return playerIcons.play;
  }, [state]) as ImageSourcePropType;  

  return (
    <Button 
      icon={buttonIcon}         
      style={styles.playPauseButton}
      onPress={handleOnPress}
    />
  );
}