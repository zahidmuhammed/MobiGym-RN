import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { Checkbox, Divider } from "react-native-paper";
import styles from "./workoutstylesheet";

const Absworkout = () => {
  const [checked0, setChecked0] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Abs Workout</Text>
      <ScrollView>
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
            Lie on your back with your knees bent and your arms streched
            forward.Then lift your upper body off the floor.Hold for a few
            seconds and slowly return.It primarily works the abdominis muscle
            and the obliques.
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
            {"   "}Start in the push-up position.Bend your right knee towards
            your chest and keep youe left leg straight,then quickly switch from
            one leg to the other.This execise strengthens multiple muscle
            groups.
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
            Lie down your back ,and put your hands beneath your hips for
            support.Then lift your legs up until they form a right angle with
            the floor.Slowly bring your legs back down and repeat the exercise.
          </Text>
        </View>
        <Divider />
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.image_container}>
              <Image
                source={require("../../assets/workout/situps.png")}
                style={{ width: 100, height: 70 }}
              />
            </View>
            <View style={styles.name_container}>
              <Text style={{ color: "#353a60" }}>Sit-ups </Text>
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
            {"   "}Lie on your back with your hands behind your ears.Then lift
            your upper body off the floor and slowly up to the sitting
            position.Don't tug your neck when you get up.Slowly go back to the
            start position and repeat the exercise.
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
              <Text>60 sec</Text>
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

export default Absworkout;
