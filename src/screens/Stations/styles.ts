import { Dimensions, StyleSheet } from "react-native";

const windowsWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 400,
    backgroundColor: '#0c0c0c',
  },

  stationContainer: {
    padding: 10
  },

  stationLogo: {
    width: '100%',
    height: 100,
    // backgroundColor: '#fff'
  },


});

export default styles;