import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Checkbox, Divider } from "react-native-paper";
const Armworkout = () => {
  const [checked0, setChecked0] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Arm Workout</Text>
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/pushup.png")}
                style={{ width: 100, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Push-ups</Text>
              <Text>x30</Text>
            </View>
            <View style={styles.checkbox_container}>
              <Checkbox
                status={checked0 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked0(!checked0);
                }}
                uncheckedColor="#515993"
                color="#515993"
              />
            </View>
          </View>
          <Text style={styles.description}>
            {"   "}
            Lay prone on the ground with arms supporting your body.Keep your
            body straight while raising and lowering your body with your arms.
            This execise works the chest,sholders,triceps,back,and legs.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/tricepsdips.png")}
                style={{ width: 100, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Triceps Dips </Text>
              <Text>x20</Text>
            </View>
            <View style={styles.checkbox_container}>
              <Checkbox
                status={checked1 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked1(!checked1);
                }}
                uncheckedColor="#515993"
                color="#515993"
              />
            </View>
          </View>

          <Text style={styles.description}>
            {"   "}
            For the start position, sit on the chair.Then move your hip off the
            chair with your hands holding the edge of the chair.Slowly bend and
            stretch your arms to make your body go up and down.This is a great
            exercise for the triceps.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/mountainclimber.png")}
                style={{ width: 100, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Mountain Climber </Text>
              <Text>x25</Text>
            </View>
            <View style={styles.checkbox_container}>
              <Checkbox
                status={checked2 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked2(!checked2);
                }}
                uncheckedColor="#515993"
                color="#515993"
              />
            </View>
          </View>

          <Text style={styles.description}>
            {"   "}
            Start in the push-up position.Bend your right knee towards your
            chest and keep youe left leg straight,then quickly switch from one
            leg to the other.This execise strengthens multiple muscle groups.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/armcircle.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Arm Circles </Text>
              <Text>x15</Text>
            </View>
            <View style={styles.checkbox_container}>
              <Checkbox
                status={checked3 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked3(!checked3);
                }}
                uncheckedColor="#515993"
                color="#515993"
              />
            </View>
          </View>

          <Text style={styles.description}>
            {"   "}Stand on the floor with your arms extended straight out to
            the sides at shoulder height.Move your arms forward in circles,and
            then move backwards.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/plank.png")}
                style={{ width: 120, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Plank </Text>
              <Text>x20</Text>
            </View>
            <View style={styles.checkbox_container}>
              <Checkbox
                status={checked4 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked4(!checked4);
                }}
                uncheckedColor="#515993"
                color="#515993"
              />
            </View>
          </View>

          <Text style={styles.description}>
            {"   "}Lie on the floor with your toes and forearms on the
            ground.Keep your body straight and hold this position as long as you
            can.This exercise strengthens the abdomens,back and shoulders.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Armworkout;

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
