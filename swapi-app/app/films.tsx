import { COLORS } from "@/constants/colors";
import { Film } from "@/types/interfaces";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  return (
    <View style={styles.container}>
      <Text>Films</Text>
    </View>
  );
};

export default Films;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.containerBackground,
  },
});
