import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../utils/color";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const { primary, white } = colors;

const OfflineNotice = () => {
  const { type, isInternetReachable } = useNetInfo();

  if (type !== "unknown" && isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary,
    height: 50,
    width: "100%",
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
  },
  text: {
    color: white,
  },
});
