import { Text, View } from 'react-native';
import PlayerTrack from '../../../modules/player/model/PlayerTrack';
import FavoriteButton from '../PlayerButtons/FavoriteButton';
import styles from '../styles';

export default function PlayerMusicInfo(props: {track: PlayerTrack}) {
  return (
    <View style={styles.playerMusicInfo}>
      <View>
        <Text style={styles.musicTitleLbl}>
          { props.track.title !== ""  ? props.track.title : "Loading..."}
        </Text>
        <Text style={styles.musicArtistLbl}>
          { props.track.title !== "" ? props.track.artist : "Loading..."}
        </Text>
      </View>
      
      <FavoriteButton currentTrack={props.track} />
    </View>
  )
}