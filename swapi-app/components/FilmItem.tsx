import { COLORS } from "@/constants/colors";
import { Film } from "@/types/interfaces"; // Assuming you have a Film type defined
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilmItem = ({ item }: { item: Film }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.filmItem}>{item.title}</Text>
    </View>
  );
};

export default FilmItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  filmItem: {
    color: COLORS.text,
  },
});
