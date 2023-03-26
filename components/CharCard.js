import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constant/theme";

const CharCard = ({ title, name, url, description, imageSource }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{ uri: imageSource }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity activeOpacity={0.4}>
          <Text style={styles.url}>{url}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    shadowColor: "#000",
  },
  image: {
    width: 100,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    color: COLORS.white,
  },
  name: {
    fontStyle: "italic",
    marginBottom: 5,
    fontWeight: "600",
    color: COLORS.black,
  },
  description: {
    marginBottom: 5,
    color: COLORS.white,
  },
  url: {
    color: COLORS.primary,
  },
});

export default CharCard;
