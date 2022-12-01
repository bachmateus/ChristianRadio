import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View, ImageBackground } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Track from "../../modules/station/model/Track"
import styles from "./styles"

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
    <ImageBackground 
      imageStyle={styles.favoriteRenderBackgroundImage}
      style={styles.favoriteRenderBackground}
      blurRadius={50} 
      resizeMethod="scale" 
      source={{uri:item.CDCover}}
    >
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
      </View>

      <View style={{...styles.favoriteBox, ...styles.favoriteExtendedBox}}>
        <TouchableOpacity style={styles.favoriteBoxIconBox} onPress={() => openLink(searchLinks.spotify)}>
        <MaterialCommunityIcons style={styles.favoriteBoxIcons} name="spotify" size={styles.favoriteBoxIcons.width} color={styles.favoriteBoxIcons.color} />
          <Text  style={styles.artist}>Spotify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favoriteBoxIconBox} onPress={() => openLink(searchLinks.youtube)}>
          <Icon style={styles.favoriteBoxIcons} name="logo-youtube" size={styles.favoriteBoxIcons.width} color={styles.favoriteBoxIcons.color} />
          <Text  style={styles.artist}>YouTube</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.favoriteBoxIconBox, styles.favoriteBoxIconBoxRemove]} 
          onPress={()=>handleRemoveFromFavorite(item)}
        >
          <Icon style={styles.favoriteBoxIcons} name="ios-remove-circle" size={styles.favoriteBoxIcons.width} color={styles.favoriteBoxIcons.color} />
          <Text style={styles.artist}>Remove</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}