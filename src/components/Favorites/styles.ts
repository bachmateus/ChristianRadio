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
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold"
  },

  favoriteBox: {
    margin: 10,
    marginBottom: 0,
    flexDirection: "row",
    backgroundColor: '#202020',
    borderRadius: 10,
    zIndex: 1
  },
  favoriteBoxArrow: {
   right: 10,
   top: 10,
  },
  favoriteImg: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,

  },

  favoriteInfo: {
    justifyContent: "center",
    paddingHorizontal: 15,
    width: windowsWidth - 110,
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
  },
  artist: {
    color: '#8e8e8e'

  },
  favoriteExtendedBox: {
    backgroundColor: '#202020',
    flexDirection: "row",
    marginTop:0,
    marginBottom: 10,
    paddingTop: 15,
    paddingHorizontal: 10,
    top: -10,
    zIndex: 0,
  },
  favoriteBoxIconBox: {
    marginRight: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  favoriteBoxIconBoxRemove: {
    alignSelf: "flex-end",
    alignContent: "flex-end",
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