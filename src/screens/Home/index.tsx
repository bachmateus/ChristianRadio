import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ActivityIndicator, Image, ImageBackground, Text, View } from "react-native";

import Station from "../../modules/station/model/Station";
import getCurrentTrackUseCaseInstance from "../../modules/station/useCases/getCurrentTrack";

import PlayerTrack from "../../modules/player/model/PlayerTrack";

import MusicPlayer from "../../components/MusicPlayer";
import playerStyles from '../../components/MusicPlayer/styles'

// TODO: alterar a imagem genérica
import genericAlbumImg from '../../assets/generic-album.png';
import styles from "./styles";
import { useCurrentTrack } from "../../hooks";
import { playlistData, stationsList } from "../../databases/playlist-data";

export default function Home() {
  const [ currentTrack, setCurrentTrack ] = useState({} as PlayerTrack)
  const interval = useRef<ReturnType<typeof setInterval>>(null);
  const {index, track} = useCurrentTrack();

  // TODO: implement loading
  useEffect(()=>{ onStationChange() }, [index])
  
  const onStationChange = async () => {
    clearInterval(interval.current);

    interval.current = setInterval(() => {
      getStationData();
    }, 1000);
  }

  async function getStationData () {
    const stationData = stationsList[index as number];
    const getCurrentTrack = getCurrentTrackUseCaseInstance();
    const newCurrentTrack = await getCurrentTrack.execute(stationData)

    if (newCurrentTrack.id === currentTrack.id) {
      return
    }
    setCurrentTrack(newCurrentTrack)
  }

  const isLoadingData = !(currentTrack.hasOwnProperty('title') && currentTrack.title !== '');
  const artworkSource = (currentTrack.hasOwnProperty('artwork') && currentTrack.artwork !== '') 
    ? {uri:currentTrack.artwork}
    : genericAlbumImg;

  return ( 
    <ImageBackground 
      style={styles.container} imageStyle={styles.containerBackground}
      blurRadius={50} 
      resizeMethod="scale" 
      source={artworkSource}
    >
      <View style={playerStyles.playerMusicInfo}>
        <View>
          <Text style={playerStyles.musicArtistLbl}>
            You're listening to {track?.name}
          </Text>
          <Image resizeMode="contain" source={track?.artwork} 
            style={{ height: 50, maxWidth: 320}} 
          />
        </View>
      </View>

      <View style={styles.capaBox}>
        <Image 
          style={styles.capa} 
          source={artworkSource}
        />
      </View>

      <MusicPlayer track={currentTrack} />

      { isLoadingData && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={'#fff'} size="large" />
        </View>
      )}
    </ImageBackground>
  );
}