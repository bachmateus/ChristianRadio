import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  playerContainer: {
  },
  playerMusicInfo: {
    backgroundColor: '#191b1fd3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0
  },

  musicTitleLbl: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  musicArtistLbl: { 
    color: 'rgb(164,161,154)',
    fontSize: 16
  },

  favoriteBox: { position:"relative"},
  favoriteImage: {},

  containerButtons: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1f2022d4',
    padding: 10,
    paddingBottom: 20
  },

  boxButton: {
    position:'relative'
  },
  customButton: {
    width: 20,
    height: 20,
  },
  backButton: {
    transform: [{rotate: '180deg'}]
  },
  playPauseButton: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25
  },
});

export default styles;