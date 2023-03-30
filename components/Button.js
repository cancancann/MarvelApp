import { Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../constant/theme";

const RedButton = ({ title, navigation, ...props }) => {
  return (
    <TouchableOpacity
      onPress={navigation}
      activeOpacity={0.5}
      style={{
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        ...props,
      }}
    >
      <Text style={style.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const Blackbutton = ({ title, navigation, ...props }) => {
  return (
    <TouchableOpacity
      onPress={navigation}
      activeOpacity={0.5}
      style={{
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "red",
        ...props,
      }}
    >
      <Text style={style.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 18.38,
    lineHeight: 22.25,
    paddingVertical: 14,
    paddingHorizontal: 119,
  },
});

export { RedButton, Blackbutton };
