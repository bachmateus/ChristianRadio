import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import Station from "../../modules/station/model/Station";
import getCurrentTrackUseCaseInstance from "../../modules/station/useCases/getCurrentTrack";
import listAllStationUseCase from "../../modules/station/useCases/listAllStation";

import PlayerTrack from "../../modules/player/model/PlayerTrack";
import RNTrackPlayerRepository from "../../modules/player/repositories/implementations/RNTrackPlayerRepository";

import toogleMusicFavoriteUseCase from "../../modules/user/useCases/toogleMusicFavoriteUseCase";
import checkIfIsFavorite from "../../modules/user/useCases/checkIfIsFavorite";

import MusicPlayer from "../../components/MusicPlayer";
import playerStyles from '../../components/MusicPlayer/styles'

import { AppReducerTypes } from "../../reducers/types";
import genericAlbumImg from '../../assets/generic-album.png';
import styles from "./styles";

interface Props {
  userKey: string
}

function HomeConnect({userKey}: Props) {
  const [ isPlaying, setIsPlaying ] = useState(true);
  const [ isLoadingData, setIsLoadingData ] = useState(false);
  const [ isTrackFavorite, setIsTrackFavorite ] = useState(false);
  const navigation = useNavigation();

  const [ stations, setStations ] = useState<Station[]>();
  const [ currentStationSelected, setCurrentStationSelected ] = useState<Station>({} as Station);
  const [ currentTrack, setCurrentTrack ] = useState({} as PlayerTrack)
  const [ player ] = useState( new RNTrackPlayerRepository());
  const interval = useRef<ReturnType<typeof setInterval>>(null);


  const onload = async () => {
    setIsLoadingData(true);
    const stations = await listAllStationUseCase.execute();
    setStations(stations);
    setCurrentStationSelected(stations![0]);
    setIsLoadingData(false);
  }
  
  const handlePlayButtonPress = async () => {
    const playerStatus = await player.togglePlay(!isPlaying);
    setIsPlaying(playerStatus);
  }

  const onStationChange = async () => {
    clearInterval(interval.current);

    interval.current = setInterval(() => {
      getStationData();
    }, 1000);
  }
  
  const getStationData = async () => {
    setIsLoadingData(true);
  
    const getCurrentTrack = getCurrentTrackUseCaseInstance();
    const newCurrentTrack = await getCurrentTrack.execute(currentStationSelected)
    
    if (newCurrentTrack.id === currentTrack.id) {
      setIsLoadingData(false);
      return
    }

    if (userKey !== "") {
      const resCheckIfIsFavorite = await checkIfIsFavorite.execute({
        userKey,
        songCode:newCurrentTrack.id
      });
      
      setIsTrackFavorite(resCheckIfIsFavorite);
    }
  
    player.setPlayerData(newCurrentTrack)
  
    setCurrentTrack(newCurrentTrack)
    setIsLoadingData(false);
  }
  
  useEffect(()=>{ onload() },[])
  useEffect(()=>{ onStationChange() }, [currentStationSelected])

  // const handleStationSelected = async (station:Station) => {
  //   setCurrentStationSelected(station)
  // }

  const handleFavorite = async () => {

    if ( !userKey ) {
      navigation.navigate('Profile')      

      return
    }

    const isFavorite = await toogleMusicFavoriteUseCase().execute({
      userKey,
      music: {
        Artist: currentTrack.artist,
        CD: currentTrack.album,
        CDCover: currentTrack.artwork,
        SongCode: currentTrack.id,
        Title: currentTrack.title
      }
    });

    setIsTrackFavorite(isFavorite);
  }

  const handlePrevious = () => {
    const index =  (currentStationSelected.id == 1) ? stations.length - 1 : currentStationSelected.id - 2;
    setCurrentStationSelected(stations[index]);
  }
  const handleNext = () => {
    const index = (currentStationSelected.id === stations.length)  ? 0 : currentStationSelected.id
    setCurrentStationSelected(stations[index]);
  }


  return ( 
    <ImageBackground 
      style={styles.container} imageStyle={styles.containerBackground}
      blurRadius={50} 
      resizeMethod="scale" 
      source={ currentTrack.artwork !== ""
        ? {uri:currentTrack.artwork}
        : genericAlbumImg
      }
    >
      <View style={playerStyles.playerMusicInfo}>
        <View>
          <Text style={playerStyles.musicArtistLbl}>
            You're listening to
          </Text>
          <Image resizeMode="contain" source={currentStationSelected.logo} 
            style={{ height: 50, maxWidth: 320}} 
          />
        </View>
      </View>

      <View style={styles.capaBox}>
        <Image 
          style={styles.capa} 
          source={ currentTrack.artwork !== ""
            ? {uri: currentTrack.artwork}
            : genericAlbumImg
          } 
        />
      </View>

      <MusicPlayer 
        track={currentTrack} 
        isTrackFavorite={isTrackFavorite} 
        isPlaying={isPlaying} 
        handleFavorite={handleFavorite}
        handlePrevious={handlePrevious}
        handlePlay={handlePlayButtonPress}
        handleNext={handleNext}
      />
    </ImageBackground>
  );
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    userKey: state.userReducer.id,
  }
}

const Home = connect(mapStateToProps)(HomeConnect);

export default Home;