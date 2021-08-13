import React, { useState } from "react";

import { BottomNavigation } from "react-native-paper";

import HomePage from "./HomePage";
import DietPlan from "./DietPage";
import FitProps from "./FitProps";

export default Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "work", title: "Workout", icon: "bullseye-arrow" },
    { key: "diet", title: "Diet Plan", icon: "bowl-mix" },
    { key: "props", title: "Fitness Props", icon: "dumbbell" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    work: HomePage,
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
