import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible = false, style }) => {
  if (!visible) return null;
  return (
    <View style={style}>
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default ActivityIndicator;
