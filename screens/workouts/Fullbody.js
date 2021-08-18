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
const Bodyworkout = () => {
  const [checked0, setChecked0] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Full Body Workout</Text>
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/jumpingjack.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Jumping Jacks </Text>
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
            Start with your feet together and your arms by your sides,then jump
            up with your feet apart and your hands overhead.Return to the start
            position then do the next rep.This exercise provides a full-body
            workout and works all your large muscle groups.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/pushup.png")}
                style={{ width: 100, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Push-ups </Text>
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
                source={require("../../assets/workout/squats.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Squats </Text>
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
            Stand with your feet shoulder width apart and your arms stretched
            forward,then lower your body until your thighs are parallel with the
            floor.Your knees should be extended in the same direction as your
            toes.Return to the start position and do the next rep.This works the
            thighs,hips buttocks,quads,hamstrings and lower body.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/legraise.png")}
                style={{ width: 100, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Leg Raise </Text>
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
            {"   "}Lie down your back ,and put your hands beneath your hips for
            support.Then lift your legs up until they form a right angle with
            the floor.Slowly bring your legs back down and repeat the exercise.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/abdominalcrunches.png")}
                style={{ width: 100, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Abdominal Crunches </Text>
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
            {"   "}Lie on your back with your knees bent and your arms streched
            forward.Then lift your upper body off the floor.Hold for a few
            seconds and slowly return.It primarily works the abdominis muscle
            and the obliques.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bodyworkout;

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
