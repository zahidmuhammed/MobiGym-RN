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
const Backworkout = () => {
  const [checked0, setChecked0] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Back Workout</Text>
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/steptochair.png")}
                style={{ width: 55, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Step-up onto chair </Text>
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
            Stand in front of a chair.Then step up on the chair and step back
            down.The exercise works to strengthen the legs and buttocks.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/superman.png")}
                style={{ width: 130, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Super man </Text>
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
            {"   "}Lie on your stomach with your arms extended straight
            overhead.Then raise both your arms and legs up off the floor.Hold
            this position for two seconds.Return to the start position and
            repeat.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/buttbridge.png")}
                style={{ width: 130, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Butt Bridge</Text>
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
            Lie on your back with knees bent and feet flat on the floor.Put your
            arms flat at your sides.Then lift your butt up and down.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/squats.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Squats </Text>
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
            {"   "}Stand with your feet shoulder width apart and your arms
            stretched forward,then lower your body until your thighs are
            parallel with the floor.Your knees should be extended in the same
            direction as your toes.Return to the start position and do the next
            rep.This works the thighs,hips buttocks,quads,hamstrings and lower
            body.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/wallsit.png")}
                style={{ width: 60, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Wall Sit </Text>
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
            {"   "}Start with your back against the wall,then slide down until
            your knees are at a 90 degree angle.Keep your back against the wall
            with your hands and arms away from your legs.Hold the position.The
            exercise is to strengthen the quadricipes muscles.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Backworkout;

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
