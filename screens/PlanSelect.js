import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const Choice = ({ value, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.choice}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const bgImage = {
  uri: "https://images.unsplash.com/photo-1606689845968-30c7c55c71d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHx3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
};

export default PlanSelect = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={bgImage} resizeMode="center" style={{ flex: 1 }}> */}
      <View style={styles.backgroundContainer}>
        <Image style={styles.bakcgroundImage} source={bgImage} />
      </View>
      <View style={styles.minicontainer}>
        <Text style={{ color: "#000", marginTop: 10 }}>
          Select your workout mode
        </Text>
        <Choice value="Easy" navigation={navigation} />
        <Choice value="Medium" navigation={navigation} />
        <Choice value="Hard" navigation={navigation} />
      </View>

      {/* </ImageBackground> */}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  minicontainer: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    opacity: 0.8,
    padding: 10,
    // borderRadius: 10,
  },
  text: {
    color: "#ececec",
    fontSize: 20,
  },
  choice: {
    width: 200,
    margin: 20,
    backgroundColor: "#515993",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backgroundContainer: {
    flex: 1,
    position: "absolute",
    top: 20,
    left: 0,
    width: "100%",
    height: "100%",
  },
  bakcgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});
