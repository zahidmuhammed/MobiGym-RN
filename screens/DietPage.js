import React from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
} from "react-native";

import Menu from "../Data/DietMenu";
export default DietPlan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Diet Plan</Text>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#7b82b6",
            paddingVertical: 15,
            paddingLeft: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 17, marginBottom: 10 }}>
            &#x1F375; Breakfast
          </Text>
          {Menu.Breakfast.map((item, index) => (
            <Text key={index} style={{ color: "#ececec", margin: 3 }}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            &#x1F36A; Snack
          </Text>
          {Menu.Snack.map((item, index) => (
            <Text key={index} style={{ color: "#ececec", margin: 3 }}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
        <View
          style={{
            backgroundColor: "#7b82b6",
            paddingVertical: 15,
            paddingLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            &#x1F957; Lunch
          </Text>
          {Menu.Lunch.map((item, index) => (
            <Text key={index} style={{ color: "#ececec", margin: 3 }}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingLeft: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            &#x1F958; Dinner
          </Text>
          {Menu.Dinner.map((item, index) => (
            <Text key={index} style={{ color: "#ececec", margin: 3 }}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
      </ScrollView>
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
    fontSize: 35,
    marginVertical: 10,
    marginLeft: 15,
    color: "#ececec",
  },
});
