import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import RNTrackPlayerRepository from "../../modules/player/repositories/implementations/RNTrackPlayerRepository";
import Station from "../../modules/station/model/Station";
import getCurrentTrackUseCaseInstance from "../../modules/station/useCases/getCurrentTrack";
import listAllStationUseCase from "../../modules/station/useCases/listAllStation";
import Tracker from "../../modules/player/model/Tracker";

export default function Home() {
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ stations, setStations ] = useState<Station[]>();
  const [ currentStationSelected, setCurrentStationSelected ] = useState<Station>({} as Station);
  const [ currentTrack, setCurrentTrack ] = useState({} as Tracker)
  const [ player ] = useState( new RNTrackPlayerRepository());

  const onload = async () => {
    const stations = await listAllStationUseCase.execute();
    setStations(stations);
    setCurrentStationSelected(stations![0]);
  }
  
  const handlePlayerStatus = async () => {
    const playerStatus = await player.togglePlay(isPlaying);
    setIsPlaying(playerStatus);
  }

  const onStationChange = async () => {
    const getCurrentTrack = getCurrentTrackUseCaseInstance();
    const currentTrack = await getCurrentTrack.execute(currentStationSelected)

    player.setPlayerData(currentTrack)
    player.start();

    setCurrentTrack(currentTrack)
  }

  const handleStationSelected = async (station:Station) => {
    setCurrentStationSelected(station)
  }

  useEffect(()=>{ onload() },[])
  useEffect(()=>{ onStationChange() }, [currentStationSelected])

  return ( 
    <View>
      <Text style={{marginBottom: 20}}>Station: {'\n' + JSON.stringify( currentStationSelected)}</Text>
      <Text style={{marginBottom: 20}}>Track: {'\n' + JSON.stringify( currentTrack)}</Text>
      <Image source={{uri: currentTrack.artwork}} style={{width: 100, height: 100}}/>
      { stations && stations.map( station => 
        <Button key={station.id} title={station.name} onPress={()=>handleStationSelected(station)} />
      )}
      
      <Button title={isPlaying ? "Pause" : "Play"} onPress={handlePlayerStatus} />

    </View>
  );
}