import React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";

import DATA from "../Data/Equipments";

const ItemBox = ({ item }) => {
  return (
    <View style={styles.itembox}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.images}
      />

      <View style={{ flex: 1 }}>
        <View style={styles.details}>
          <Text style={{ color: "#3c426d", fontSize: 17 }}>{item.value}</Text>
        </View>
        <TouchableOpacity
          style={styles.amzlink}
          onPress={() => {
            WebBrowser.openBrowserAsync(item.link);
          }}
        >
          <Text numberOfLines={1} style={{ color: "#515993" }}>
            {item.link}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FitProps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Workout Equipments</Text>
      <FlatList
        data={DATA}
        renderItem={ItemBox}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#515993",
  },
  heading: {
    fontSize: 30,
    padding: 10,
    color: "#ececec",
  },
  itembox: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    height: 100,
    margin: 10,
  },
  images: { width: 100, height: 95, borderRadius: 6 },
  details: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  amzlink: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 1,
    borderColor: "#515993",
    padding: 5,
  },
});
