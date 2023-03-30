import { View, Text } from "react-native";
import React from "react";
import Slider from "../components/Slider";
import { COLORS } from "../constant/theme";

const SlideScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Slider />
    </View>
  );
};

export default SlideScreen;
