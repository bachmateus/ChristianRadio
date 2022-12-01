import { Dimensions, StyleSheet } from "react-native";

const windowsWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
  },

  favoriteTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 20,
    fontWeight: "bold"
  },

  favoriteRenderBackground: {
    minWidth:100,
    minHeight:20,
    paddingVertical:20,
    margin: 10,
  },
  favoriteRenderBackgroundImage: {
    borderRadius:5
  },

  favoriteBox: {
    margin: 10,
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    zIndex: 1
  },
  favoriteBoxArrow: {
   right: 10,
   top: 10,
  },
  favoriteImg: {
    width: 200,
    height: 200,
    marginBottom: 20

  },

  favoriteInfo: {
    justifyContent: "center",
    paddingHorizontal: 15,
    textAlign: "center",
    width: windowsWidth - 110,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: 15,
    marginBottom: 10
  },

  favoriteEmptyText: {
    color:'#fff', 
    marginLeft: 20
  },

  title: {
    fontSize: 20,
    width: '100%',
    fontWeight: "bold",
    color: '#fff',
    textAlign: "center",
  },
  artist: {
    color: '#8e8e8e',
    textAlign: "center",
  },
  favoriteExtendedBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    paddingHorizontal: 10,
    zIndex: 0,

  },
  favoriteBoxIconBox: {
    marginRight: 20,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: '#202020',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 30,

  },
  favoriteBoxIconBoxRemove: {
    alignSelf: "flex-end",
    alignContent: "flex-end",
  },
  favoriteBoxIcons: {
    width: 20,
    height: 20,
    marginRight: 5,
    color: '#8e8e8e'
  },

  /* Unlogged */
  loginButton: {
    backgroundColor: '#fff'
  },

  loginButtonLabel: {

  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 10
  }
});

export default styles;