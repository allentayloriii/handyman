import { COLORS } from "@/constants/colors";
import { Film } from "@/types/interfaces"; // Assuming you have a Film type defined
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilmItem = ({ item }: { item: Film }) => {
  return (
    <View style={styles.filmItem}>
      <Text style={styles.filmTitle}>{item.title}</Text>
      <View>
        <Text
          style={styles.filmDetailText}
        >{`Episode: ${item.episode_id}`}</Text>
        <Text
          style={styles.filmDetailText}
        >{`Director: ${item.director}`}</Text>
        <Text
          style={styles.filmDetailText}
        >{`Release Date: ${item.release_date}`}</Text>
      </View>
    </View>
  );
};

export default FilmItem;

const styles = StyleSheet.create({
  filmItem: {
    backgroundColor: COLORS.background,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  filmTitle: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 18,
  },
  filmDetails: {
    // You can add View-specific styles here if needed
  },
  filmDetailText: {
    fontSize: 14,
    color: "white",
  },
});
