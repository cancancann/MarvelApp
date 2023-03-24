import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../constant/theme";
import Form from "../components/Form";
import { Blackbutton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goSignup = ()=>{
    navigation.navigate("Signup")
  }
  
  const goHome = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 65 }}>
        <Image
          style={styles.SliderImage}
          source={require("../assets/Marvel-Logo.png")}
          resizeMode="contain"
        />
      </View>
      <Form title="SignUp" goTo={goSignup}>
        <Blackbutton navigation={goHome} title="Login" backgroundColor={COLORS.black} />
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

export default LoginScreen;
