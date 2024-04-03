import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View, Platform } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* Need to implement an external padding two different ways depending on platform */}
      {Platform.OS === "android" ? (
        children
      ) : (
        <View style={[styles.view, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
  view: {
    flex: 1,
  },
});
