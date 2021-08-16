import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigation } from "react-native-paper";

import HomePage from "./HomePage";
import Bodyworkout from "./workouts/Fullbody";
import Absworkout from "./workouts/Absworkout";
import Backworkout from "./workouts/Backworkout";
import Armworkout from "./workouts/Armworkout";
import Legworkout from "./workouts/Legworkout";

import DietPlan from "./DietPage";
import FitProps from "./FitProps";

const StackNav = createNativeStackNavigator();

const WorkoutNav = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen name="Main" component={HomePage} />
      <StackNav.Screen name="Body" component={Bodyworkout} />
      <StackNav.Screen name="Abs" component={Absworkout} />
      <StackNav.Screen name="Back" component={Backworkout} />
      <StackNav.Screen name="Arm" component={Armworkout} />
      <StackNav.Screen name="Leg" component={Legworkout} />
    </StackNav.Navigator>
  );
};

export default Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "work", title: "Workout", icon: "bullseye-arrow" },
    { key: "diet", title: "Diet Plan", icon: "bowl-mix" },
    { key: "props", title: "Fitness Props", icon: "dumbbell" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    work: WorkoutNav,
    diet: DietPlan,
    props: FitProps,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#20233a" }}
    />
  );
};
