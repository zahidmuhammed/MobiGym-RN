import { StatusBar } from "expo-status-bar";
import { Avatar } from "react-native-elements";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const Banner = ({ value, cover }) => {
  return (
    <View style={styles.banner}>
      <View style={styles.bannermessage}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          &#x275B; {value} &#x275C;
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#d4d7e7", borderRadius: 15 }}>
        <Image
          source={{ uri: cover }}
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>
    </View>
  );
};

const MiniAvater = ({ value, img, navig }) => {
  return (
    <TouchableOpacity
      style={styles.avater}
      onPress={() => navig.navigate(value)}
    >
      <Avatar
        rounded
        size="medium"
        source={{
          uri: img,
        }}
      />
      <Text style={styles.whitetxt}>{value}</Text>
    </TouchableOpacity>
  );
};

export default HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textheading}>Daily Fitness</Text>
      <View style={styles.header}>
        <MiniAvater
          value="Body"
          img="https://images.unsplash.com/photo-1579758682665-53a1a614eea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGxlZyUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          navig={navigation}
        />
        <MiniAvater
          value="Abs"
          img="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          navig={navigation}
        />
        <MiniAvater
          value="Back"
          img="https://images.unsplash.com/photo-1567598508481-65985588e295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxneW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          navig={navigation}
        />
        <MiniAvater
          value="Arm"
          img="https://images.unsplash.com/photo-1543975200-8e313fb04fc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          navig={navigation}
        />
        <MiniAvater
          value="Leg"
          img="https://images.unsplash.com/photo-1597892657493-6847b9640bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGVnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          navig={navigation}
        />
      </View>

      <Banner
        value="The pain you feel today will be the strength you feel tomarrow"
        cover="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya291dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Banner
        value=" The only bad workout is the  one that didn't happen"
        cover="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <Banner
        value="Physical fitness is the first requisite of happiness"
        cover="https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />

      <View
        style={{
          backgroundColor: "#515993",
          flex: 0.5,
        }}
      ></View>

      <StatusBar style="light" backgroundColor="#515993" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#515993",
    top: 20,
  },
  header: {
    backgroundColor: "#515993",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  avater: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    backgroundColor: "#7b82b6",
    flex: 2,
    flexDirection: "row",
    borderRadius: 15,
    margin: 8,
  },
  bannermessage: {
    flex: 1,
    backgroundColor: "#7b82b6",
    borderRadius: 15,
    justifyContent: "center",
    padding: 10,
  },
  textheading: {
    color: "#e2ded3",
    marginVertical: 10,
    marginLeft: 15,
    fontSize: 35,
    padding: 1,
  },
  whitetxt: {
    color: "#e2ded3",
    textAlign: "center",
  },
});
