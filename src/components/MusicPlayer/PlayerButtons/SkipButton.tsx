import React from 'react';
import TrackPlayer from 'react-native-track-player';
import { playerIcons } from '../../../assets/icons';
import { useCurrentTrack } from '../../../modules/player/hooks';
import { stationsList } from '../../../modules/station/databases/playlist-data';
import styles from '../styles';
import Button from './Button';

interface Props { buttonType: 'previous' | 'next'}

export default function SkipButton({ buttonType }: Props) {
  const buttonProps = buttonType === 'previous' ? previousButton : nextButton;
  const {index} = useCurrentTrack();

  const isPreviousDisabled = () => index === 0 && buttonType === 'previous';
  const isNextDisabled = () => index === stationsList.length - 1 && buttonType === 'next';

  const disabled = isPreviousDisabled() || isNextDisabled();

  return (
    <Button 
      onPress={buttonProps.onPress}
      icon={buttonProps.icon}
      style={buttonProps.style}
      disabled={disabled}
    />
  )
}

const previousButton = {
  onPress: () => { TrackPlayer.skipToPrevious() },
  style: [styles.customButton, styles.backButton],
  icon: playerIcons.nextPrevious
}

const nextButton = {
  onPress: () => { TrackPlayer.skipToNext() },
  style: styles.customButton,
  icon: playerIcons.nextPrevious
}