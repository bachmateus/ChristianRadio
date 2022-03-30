import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    justifyContent: "center",
    alignItems: "center"
  // backgroundColor: 
  },

  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 10,
  },

  text: {
    color: '#fff',
    fontSize: 16
  },

  buttonContainer: {
    marginTop: 80,
    flexDirection: "row",
    alignItems:"center",
    backgroundColor: '#004ffa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    minWidth: 240
  },
  butttonIcon: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles