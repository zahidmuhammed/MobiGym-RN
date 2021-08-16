import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";
const Bodyworkout = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Full Body </Text>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
        uncheckedColor="#515993"
        color="#515993"
      />
    </View>
  );
};

export default Bodyworkout;
