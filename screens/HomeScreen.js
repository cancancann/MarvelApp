import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CharCard from "../components/CharCard";
import { characters } from "../constant/dataChar";
import { COLORS } from "../constant/theme";
import { FlatList } from "react-native";

//bottom tab kullanılması gerek denememiz laazım

const HomeScreen = () => {
  const renderCard = ({ item }) => {
    return (
      <CharCard
        title={item.title}
        name={item.name}
        url={item.url}
        description={item.description}
        imageSource={item.image}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderCard}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
