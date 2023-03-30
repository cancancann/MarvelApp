import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../constant/theme";
import { Blackbutton, RedButton } from "./Button";
import { useNavigation } from "@react-navigation/native";

const Slider = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    return navigation.navigate("Signup");
  };
  const handleLogin = () => {
    return navigation.navigate("Login");
  };

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

      <View style={{ position: "absolute", top: 495 }}>
        <RedButton
          title="SignUp"
          backgroundColor={COLORS.secondary}
          navigation={handleSignup}
        />
      </View>
      <View style={{ position: "absolute", top: 577 }}>
        <Blackbutton
          title="Login"
          backgroundColor={COLORS.black}
          navigation={handleLogin}
        />
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
  text: {
    color: COLORS.white,
  },
  logo: {
    position: "absolute",
    top: 280,
  },
});

export default Slider;
