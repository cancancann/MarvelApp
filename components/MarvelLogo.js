import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../constant/theme";

const MarvelLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.SliderImage}
        source={require("../assets/Marvel-Logo.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default MarvelLogo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
