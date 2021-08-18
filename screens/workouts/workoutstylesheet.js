import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 35,
    marginVertical: 10,
    marginLeft: 15,
    color: "#515993",
  },
  image_container: {
    flex: 1,
    backgroundColor: "#d4d7ec",
    justifyContent: "center",
    alignItems: "center",
  },
  name_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ececec",
    borderBottomEndRadius: 10,
  },
  checkbox_container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  description: {
    textAlign: "justify",
    fontSize: 10,
    marginTop: 5,
    paddingHorizontal: 15,
    color: "grey",
    backgroundColor: "#fff",
  },
});

export default styles;
