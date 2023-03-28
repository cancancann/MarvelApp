import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import assets from "../constant/assets";
import { COLORS } from "../constant/theme";

const HomeHeader = ({ title, onSearch }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.header}>
        <TextInput
          placeholder="Search Characters Card"
          style={styles.input}
          onChangeText={onSearch}
          placeholderTextColor={COLORS.white}
        />
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    paddingTop: 20,
    fontSize: 20,
    lineHeight: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "red",
    borderWidth: 10,
    padding: 10,
    color: COLORS.white,
    borderRadius: 20,
    width: "60%",
  },
});
