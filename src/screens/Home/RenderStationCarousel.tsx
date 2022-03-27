import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Station from "../../modules/station/model/Station";
import styles from "./styles";

interface Props {
  item: Station
  index: number

  handleStationSelected: (station:Station)=>void
}

export default function RenderRadio ({item, index, handleStationSelected}: Props) {
  // const CDCover = props.tracks && item.site + props.tracks[`${item.stationCode}_CDCover`];

  return ( 
    <TouchableOpacity  
      style={{...styles.radioBox, transform:[{scale:1}]}}
      key={index}  onPress={()=>handleStationSelected(item)}
    >

      {/* <Image source={{uri: CDCover}} style={{...styles.radioBoxImg}}/> */}

      <View style={styles.radioBoxImgLogoBox}>
        <Image resizeMode="contain" source={item.logo} style={{...styles.radioBoxImgLogo}}/>
      </View>
    </TouchableOpacity>
)};