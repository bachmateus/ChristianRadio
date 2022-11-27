import React from 'react';
import TrackPlayer from 'react-native-track-player';
import { playerIcons } from '../../../assets/icons';
import styles from '../styles';
import Button from './Button';

interface Props { buttonType: 'previous' | 'next'}

export default function SkipButton({ buttonType }: Props) {
  const buttonProps = buttonType === 'previous' ? previousButton : nextButton;

  return (
    <Button 
      onPress={buttonProps.onPress}
      icon={buttonProps.icon}
      style={buttonProps.style}
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