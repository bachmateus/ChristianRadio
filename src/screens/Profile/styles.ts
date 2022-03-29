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
    flexDirection: "row"
  },

  profileImage: {
    width: 100, 
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 20
  },

  boxProfileInfo: {
    justifyContent: "center"
  },

  profileName: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20
  }
});

export default styles;