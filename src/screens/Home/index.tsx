import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import Station from "../../modules/station/model/Station";
import Track from "../../modules/station/model/Track";
import getCurrentTrackUseCaseInstance from "../../modules/station/useCases/getCurrentTrack";
import listAllStationUseCase from "../../modules/station/useCases/listAllStation";

import PlayerTrack from "../../modules/player/model/PlayerTrack";
import RNTrackPlayerRepository from "../../modules/player/repositories/implementations/RNTrackPlayerRepository";

import toogleMusicFavoriteUseCase from "../../modules/user/useCases/toogleMusicFavoriteUseCase";

import MusicPlayer from "../../components/MusicPlayer";
import playerStyles from '../../components/MusicPlayer/styles'

import { setStationData } from '../../reducers/stationReducer/actions';
import { setFavoritesData } from "../../reducers/favoritesReducer/actions";
import { AppReducerTypes } from "../../reducers/types";

import genericAlbumImg from '../../assets/generic-album.png';
import styles from "./styles";

interface Props {
  userKey: string
  currentStationSelected: Station
  favorites: Track[]
  setStationData: Function
  setFavoritesData: Function
}

function HomeConnect({
  userKey, 
  currentStationSelected, 
  favorites,
  setStationData,
  setFavoritesData,
}: Props) {

  const [ isPlaying, setIsPlaying ] = useState(true);
  const [ isLoadingData, setIsLoadingData ] = useState(false);
  const [ isTrackFavorite, setIsTrackFavorite ] = useState(false);
  const navigation = useNavigation();

  const [ stations, setStations ] = useState<Station[]>();
  const [ currentTrack, setCurrentTrack ] = useState({} as PlayerTrack)
  const [ player ] = useState( new RNTrackPlayerRepository());
  const interval = useRef<ReturnType<typeof setInterval>>(null);


  const onload = async () => {
    setIsLoadingData(true);
    const stations = await listAllStationUseCase.execute();
    setStations(stations);
    setStationData(stations![0]);
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
  
  async function getStationData () {
    setIsLoadingData(true);
  
    const getCurrentTrack = getCurrentTrackUseCaseInstance();
    const newCurrentTrack = await getCurrentTrack.execute(currentStationSelected)

    if (favorites.length > 0) {
      const resCheckIfIsFavorite = favorites.some( 
        favorite => favorite.SongCode === newCurrentTrack.id
      );

      setIsTrackFavorite(resCheckIfIsFavorite);
    } else {
      setIsTrackFavorite(false);
    }

    if (newCurrentTrack.id === currentTrack.id) {
      setIsLoadingData(false);
      return
    }
  
    player.setPlayerData(newCurrentTrack)
  
    setCurrentTrack(newCurrentTrack)
    setIsLoadingData(false);
  }
  
  useEffect(()=>{ onload() },[])
  useEffect(()=>{ onStationChange() }, [currentStationSelected, favorites])

  const handleFavorite = async () => {
    if ( !userKey ) {
      navigation.navigate('Favorites')      
      return
    }
    
    const favoriteResponse = await toogleMusicFavoriteUseCase().execute({
      userKey,
      music: {
        Artist: currentTrack.artist,
        CD: currentTrack.album,
        CDCover: currentTrack.artwork,
        SongCode: currentTrack.id,
        Title: currentTrack.title
      },
      favoriteList:favorites
    });
    

    if (favoriteResponse.isFavorite) {
      const newFavorites = [
        ...favorites,
        favoriteResponse.data
      ];

      setFavoritesData(newFavorites);
    } else {
      const newFavorites = favorites.filter(
        fav => fav.id !== favoriteResponse.data.id 
      );

      setFavoritesData(newFavorites);
    }

  }

  const handlePrevious = () => {
    const index =  (currentStationSelected.id == 1) ? stations.length - 1 : currentStationSelected.id - 2;
    setStationData(stations[index]);
  }
  const handleNext = () => {
    const index = (currentStationSelected.id === stations.length)  ? 0 : currentStationSelected.id
    setStationData(stations[index]);
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
            You're listening to {currentStationSelected.name}
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
    currentStationSelected: state.stationReducer,
    favorites: state.favoritesReducer
  }
}

const Home = connect(mapStateToProps, { setStationData, setFavoritesData })(HomeConnect);

export default Home;