import { StyleSheet, View, TextInput, Text } from "react-native";
import React from "react";
import { RedButton } from "./Button";
import { COLORS } from "../constant/theme";
import { TouchableOpacity } from "react-native";

const Form = ({ children, goTo,title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="Enter your Email ID" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      {children}
      <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
        <Text style={styles.text}>Forgot Password ? </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Already have an account?</Text>

        <TouchableOpacity activeOpacity={0.7} onPress={goTo}>
          <Text style={[styles.text, { color: COLORS.secondary }]}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 50,
    padding: 16,
    marginVertical: 12,
  },
  text: {
    color: "#FFFFFFB2",
    marginTop: 12,
    fontWeight: 800,
    fontSize: 15,
  },
  content: {
    marginBottom: 24,
  },
});

export default Form;
