import { Dimensions, StyleSheet } from "react-native";

const windowsWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 400,
    backgroundColor: '#0c0c0c',
  },

  favoriteBox: {
    margin: 10,
    marginBottom: 0,
    flexDirection: "row",
    backgroundColor: '#202020',
    borderRadius: 10,
    zIndex: 1

    // width: windowsWidth - 80
  },
  favoriteBoxArrow: {
   right: 10,
   top: 10,
  //  bottom:0 
  },
  favoriteImg: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,

  },

  favoriteInfo: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "center",
    // justifyContent: "space-around",
    paddingHorizontal: 15,
    width: windowsWidth - 110,
  },
  title: {
    fontSize: 20,
    width: '100%',
    fontWeight: "bold",
    color: '#fff',
    // backgroundColor: "#f00",

  },
  artist: {
    color: '#8e8e8e'

  },
  favoriteExtendedBox: {
    backgroundColor: '#202020',
    flexDirection: "row",
    // justifyContent: "flex-end",
    marginTop:0,
    marginBottom: 10,
    paddingTop: 15,
    paddingHorizontal: 10,
    top: -10,
    zIndex: 0,
  },
  favoriteBoxIconBox: {
    marginRight: 10,
    // width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  favoriteBoxIconBoxRemove: {
    alignSelf: "flex-end",
    alignContent: "flex-end",
    
    // alignSelf: "flex-end"
  },
  favoriteBoxIcons: {
    width: 20,
    height: 20,
  },

  /* Unlogged */
  loginButton: {
    backgroundColor: '#fff'
  },

  loginButtonLabel: {

  },

});

export default styles;