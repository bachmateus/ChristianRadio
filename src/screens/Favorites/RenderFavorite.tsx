import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from "react-native"

import Track from "../../modules/station/model/Track"
import styles from "./styles"

import spotifyImg from '../../assets/spotify.png';
import youtubeImg from '../../assets/youtube.png';
import removeImg from '../../assets/remove.png';

interface RenderFavoriteProps {
  item:Track
  userKey:string
  handleRemoveFromFavorite: (item:Track)=>void
} 

const searchLinks = {
  spotify: "https://open.spotify.com/search/",
  youtube: "https://www.youtube.com/results?search_query="
}

export default function RenderFavorite({
  item, handleRemoveFromFavorite
}: RenderFavoriteProps) {

  const openLink = (url: string) => {
    let search = item.Title.replace(/\s+/g, '%20');
    search += '%20' + item.Artist.replace(/\s+/g, '%20');

    Linking.openURL(url + search);
  }

  return (
    <View>
      <View style={styles.favoriteBox}>
        <Image 
          source={{uri:item.CDCover}} 
          style={styles.favoriteImg}
        /> 

        <View style={styles.favoriteInfo}>
          <Text style={styles.title}>{item.Title}</Text>
          <Text style={styles.artist}>Artist * {item.Artist}</Text>
          <Text style={styles.artist}>Album * {item.CD}</Text>
        </View>

        {/* <ArrowButton 
          onPress={ handleArrowPress }
          isTurned={!showDetails}
          styles={styles.favoriteBoxArrow}
        /> */}
      </View>

      <View style={{...styles.favoriteBox, ...styles.favoriteExtendedBox}}>
        <TouchableOpacity style={styles.favoriteBoxIconBox} onPress={() => openLink(searchLinks.spotify)}>
          <Image source={spotifyImg} style={styles.favoriteBoxIcons} /> 
          <Text  style={styles.artist}>Spotify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favoriteBoxIconBox} onPress={() => openLink(searchLinks.youtube)}>
          <Image source={youtubeImg} style={styles.favoriteBoxIcons} /> 
          <Text  style={styles.artist}>YouTube</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.favoriteBoxIconBox, styles.favoriteBoxIconBoxRemove]} 
          onPress={()=>handleRemoveFromFavorite(item)}
        >
          <Image source={removeImg} style={styles.favoriteBoxIcons} /> 
          <Text  style={styles.artist}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}