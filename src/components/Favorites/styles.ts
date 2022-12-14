import { Dimensions, StyleSheet } from "react-native";

const windowsWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  favoriteEmptyText: {
    color:'#fff', 
    marginLeft: 20
  },

  favoriteTitleContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  favoriteTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  listIcon: {
    width: 50,
    color: '#fff',
  },

  /* Unlogged */
  loginButton: {
    backgroundColor: '#fff'
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

const grade = StyleSheet.create({
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

const list = StyleSheet.create({
  favoriteRenderBackground: {
    minWidth:100,
    minHeight:20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  favoriteRenderBackgroundImage: {
    borderRadius:8,
    marginLeft: 30,
  },

  favoriteBox: {
    paddingVertical: 5,
    marginLeft: 20,
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  favoriteImg: {
    width: 100,
    height: 100,
    borderRadius: 15,
    position: "absolute",
    left: -20,
    zIndex: 2,
  },

  favoriteInfo: {
    paddingVertical: 15,
    paddingLeft: 90,
    borderRadius: 8,
    flex: 1,
    height: 110,
  },

  title: {
    fontSize: 20,
    width: '100%',
    fontWeight: "bold",
    color: '#fff',
  },
  artist: {
    color: '#8e8e8e',
  },
  favoriteExtendedBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    paddingHorizontal: 10,
    zIndex: 0,
    display: "none"
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
});

export const gradeStyles = {...styles, ...grade};
export const listStyles = {...styles, ...list};

listStyles.listIcon.width
gradeStyles.listIcon.width
// export default styles;
// export default simplifiedStyles;