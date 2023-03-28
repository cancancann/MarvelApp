import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CharCard from "../components/CharCard";
import { COLORS } from "../constant/theme";
import { characters } from "../constant/dataChar";
import { FlatList } from "react-native";
import HomeHeader from "../components/HomeHeader";

//bottom tab kullanılması gerek denememiz laazım

const HomeScreen = () => {
  const [char, setChar] = useState(characters);

  const handleSearch = (value) => {
    if (!value.length) return setChar(characters);

    const filteredCard = characters.filter((item) => {
      item.name.toLowerCase().includes(value.toLowerCase());
    });

    if (filteredCard.length) {
      setChar(filteredCard);
    } else {
      setChar(char);
    }
    console.log(filteredCard);
  };

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
        ListHeaderComponent={
          <HomeHeader title="Characters and Movies" onSearch={handleSearch} />
        }
        data={char}
        renderItem={renderCard}
        keyExtractor={(item) => item.title}
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
