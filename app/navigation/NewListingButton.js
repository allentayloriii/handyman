import { StyleSheet, Text, View, Platform, Pressable } from "react-native";
import React from "react";
import colors from "../utils/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { primary, white } = colors;

const NewListingButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={white} size={40} />
      </View>
    </Pressable>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: primary,
    borderColor: white,
    bottom: Platform.OS === "android" ? 25 : 20,
    borderRadius: 40,
    borderWidth: 10,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});
