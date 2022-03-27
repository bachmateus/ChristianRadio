import { Dimensions, StyleSheet } from "react-native";

export const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  // justifyContent: "flex-end"
},
containerBackground: {
  width: 1000,
  height: 8000,
  backgroundColor: '#1f2022a6'
},

capaBox: {
  position: 'relative',
  flex: 1,
  justifyContent: "center",
},
capa: {
  borderRadius: 5,
  margin: 20,

  maxWidth: Dimensions.get('screen').width - 40,
  maxHeight: Dimensions.get('screen').width - 40,

  flex:1,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  // elevation: 5,
},

// radiosList:{
//   marginTop: 20,
// },
radiosContainer: {
  position: "relative",
  alignItems: 'center',
  paddingVertical: 20,
  marginTop: 20,
  backgroundColor: '#1f2022',
},

radiosContainerButton: {
  // position: 'absolute',
  // top: -15,
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: 5,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
},
radiosContainerButtonText: {
  fontWeight: 'bold',
  paddingRight: 10
},

radioBox: {
  width: Math.round(windowWidth * 0.7),
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
},
// radioBoxTitle: {
//   fontSize: 28,
// },
// radioBoxSpan: {
//   fontSize: 32
// },



radioBoxImgLogoBox: {
  // position: 'absolute',
  minHeight: 200,
  // backgroundColor: '#1f2022a6',
  borderRadius: 2,
  padding: 5
},
radioBoxImgLogo: {
  height: 30,
  maxWidth: Math.round(windowWidth * 0.7) ,
},
radioBoxImg: {
  width: Math.round(windowWidth * 0.7)  - 80,
  height: Math.round(windowWidth * 0.7) - 80,
  opacity: 0.5
},

});

export default styles;