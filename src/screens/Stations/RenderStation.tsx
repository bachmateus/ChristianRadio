import React from 'react';
import { Image, View, TouchableOpacity, Text} from "react-native"

import styles from "./styles"

import Station from '../../modules/station/model/Station';

interface RenderStationProps {
  station:Station
  isBeginPlayed: boolean
  handleStationSelected: () => void
} 

export default function RenderStation({
  station, isBeginPlayed, handleStationSelected
}: RenderStationProps) {

  return (
    <View style={styles.stationContainer}>
      <TouchableOpacity onPress={handleStationSelected}>
        <Image 
          source={station.logo} 
          style={styles.stationLogo}
          resizeMode="contain"
        /> 

        { isBeginPlayed && (
          <Text style={{color: '#fff'}}>Playing now</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}