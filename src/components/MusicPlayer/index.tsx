import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import heartActive from '../../assets/heart-active.png';
import heartInactive from '../../assets/heart-inactive.png';
import playButton from '../../assets/play-button.png';
import pauseButton from '../../assets/pause-button.png';
import nextButton from '../../assets/next.png';

import styles from './styles';
import PlayerTrack from '../../modules/player/model/PlayerTrack';

interface Props {
  track: PlayerTrack
  isTrackFavorite: boolean
  isPlaying: boolean

  handleFavorite: () => void
  handlePrevious: () => void
  handlePlay: () => void
  handleNext: () => void
}

export default function MusicPlayer (props: Props) {
  return (
    <View style={styles.playerContainer}>
      <View style={styles.playerMusicInfo}>
        <View>
          <Text style={styles.musicTitleLbl}>
            { props.track.title !== ""  ? props.track.title : "Loading..."}
          </Text>
          <Text style={styles.musicArtistLbl}>
            { props.track.title !== "" ? props.track.artist : "Loading..."}
          </Text>
        </View>
        
        <TouchableOpacity 
          onPress={props.handleFavorite} 
          style={styles.favoriteBox}
          disabled={props.track.id === ""}
        >
          <Image 
            source={ props.isTrackFavorite ? heartActive : heartInactive} 
            style={styles.customButton}/>
        </TouchableOpacity>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={props.handlePrevious }>
          <Image 
            source={nextButton} 
            style={[styles.customButton, styles.backButton]}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.handlePlay}>
          <Image 
            source={props.isPlaying ? pauseButton : playButton} 
            style={styles.playPauseButton}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.handleNext}>
          <Image 
            source={nextButton} 
            style={styles.customButton}/>
        </TouchableOpacity>
      </View>
  </View>
  );
}

