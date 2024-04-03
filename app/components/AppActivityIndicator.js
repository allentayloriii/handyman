import {
  ActivityIndicator as GoogleActivityIndicator,
  Platform,
  StyleSheet,
} from "react-native";
import ActivityIndicator from "./ActivityIndicator";

const AppActivityIndicator = ({ loading = false }) => {
  return (
    <>
      {Platform.OS === "ios" ? (
        <ActivityIndicator visible={loading} size="large" />
      ) : (
        <GoogleActivityIndicator
          animating={loading}
          size="large"
          color="#FA8072"
          style={{ top: "50%" }}
        />
      )}
    </>
  );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
  container: {},
});
