import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Station from "../../modules/station/model/Station";
import getCurrentTrackUseCaseInstance from "../../modules/station/useCases/getCurrentTrack";
import listAllStationUseCase from "../../modules/station/useCases/listAllStation";

export default function Home() {
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ stations, setStations ] = useState<Station[]>();
  const [ currentStationSelected, setCurrentStationSelected ] = useState<Station>();

  const onload = async () => {
    const stations = await listAllStationUseCase.execute();

    setStations(stations);
    setCurrentStationSelected(stations[0]);
  }
  
  const onStationChange = async () => {
    const getCurrentTrack = getCurrentTrackUseCaseInstance();
    const currentTrack = await getCurrentTrack.execute(currentStationSelected)

    console.log(currentTrack)
    // try {
    //   console.log('stations');
    //   const currentTrack0 = await getCurrentTrack.execute(stations[0])
    //   const currentTrack1 = await getCurrentTrack.execute(stations[1])
    //   const currentTrack2 = await getCurrentTrack.execute(stations[2])
  
    //   console.log(currentTrack0);
    //   console.log(currentTrack1);
    //   console.log(currentTrack2);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  const handleStationSelected = async (station:Station) => {
    const getCurrentTrack = getCurrentTrackUseCaseInstance();

    setCurrentStationSelected(station)
    const currentTrack = await getCurrentTrack.execute(station)
    console.log(currentTrack);
  }

  useEffect(()=>{ onload() },[])
  useEffect(()=>{ onStationChange }, [currentStationSelected])

  return ( 
    <View>
      <Text>asdasdasd</Text>

      { stations && stations.map( station => 
        <Button key={station.id} title={station.name} onPress={()=>handleStationSelected(station)} />
      )}

      <Button title="press" onPress={onload} />
      <Button title="press" onPress={onload} />
      <Button title="press" onPress={onload} />

      
      {/* <Button title={isPlaying ? "Pause" : "Play"} onPress={handlePlayerStatus} /> */}

    </View>
  );
}