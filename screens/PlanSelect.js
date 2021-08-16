import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { Button, Text } from "react-native-paper";

const bgImage = {
  uri: "https://images.unsplash.com/photo-1606689845968-30c7c55c71d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHx3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
};

export default PlanSelect = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image style={styles.bakcgroundImage} source={bgImage} />
      </View>
      <View style={styles.minicontainer}>
        <View>
          <Text style={{ margin: 5 }}>
            You Just Get Better &#x1F4AA;&#x1F3FC;
          </Text>
          <Button mode="outlined" onPress={() => navigation.navigate("Home")}>
            Start
          </Button>
        </View>
      </View>

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
