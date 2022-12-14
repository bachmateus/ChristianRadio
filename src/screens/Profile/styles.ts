import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
  },
  contentContainer: {
    justifyContent: "center",
  },
  
  boxProfile: {
    padding: 20,
    flexDirection: "row",
    backgroundColor: 'rgb(32,32,32)'
  },

  profileImage: {
    width: 80, 
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 20
  },

  boxProfileInfo: {  },

  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  logoutButtonContainer: {},
  logoutButtonText: {
    paddingVertical: 5,
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: "center",
    borderColor: '#d5d5d5',
    borderBottomWidth: 2,
  },
});

export default styles;