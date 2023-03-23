import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../constant/theme";
import { Blackbutton, RedButton } from "./Button";

const Slider = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.SliderImage}
        source={require("../assets/images/slider3.png")}
        resizeMode="contain"
      />
      <View style={styles.logo}>
        <Image source={require("../assets/Marvel-Logo.png")} />
      </View>

      <View style={{ position: "absolute",top:495}}>
        <RedButton title="SignUp" backgroundColor={COLORS.secondary} />
      </View>
      <View style={{position:"absolute",top:577}}>
        <Blackbutton title="Login" backgroundColor={COLORS.black}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  SliderImage: {},
  text: {
    color: COLORS.white,
  },
  logo: {
    position: "absolute",
    top: 280,
  },
});

export default Slider;
