import {
  ActivityIndicator as GoogleActivityIndicator,
  Platform,
  StyleSheet,
} from "react-native";
import colors from "../utils/color";
import ActivityIndicator from "./ActivityIndicator";

const { white, primary } = colors;
const AppActivityIndicator = ({ loading = false }) => {
  return (
    <>
      {Platform.OS === "ios" && (
        <ActivityIndicator
          visible={loading}
          style={styles.container}
          size="large"
        />
      )}
      {loading && Platform.OS === "android" && (
        <GoogleActivityIndicator
          animating={loading}
          size="large"
          color={primary}
          style={styles.container}
        />
      )}
    </>
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    height: "100%",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});
