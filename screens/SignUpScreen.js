import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import MarvelLogo from "../components/MarvelLogo";
import { COLORS } from "../constant/theme";
import Form from "../components/Form";
import { RedButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 65 }}>
        <Image
          style={styles.SliderImage}
          source={require("../assets/Marvel-Logo.png")}
          resizeMode="contain"
        />
      </View>
      <Form title="Login" goTo={goLogin}>
        <RedButton title="SignUp" backgroundColor={COLORS.secondary} />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUpScreen;
