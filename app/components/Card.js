import { Image, Pressable, StyleSheet, View } from "react-native";
import colors from "../utils/color";
import AppText from "./AppText";

const { secondary, white } = colors;

const Card = ({ title, subTitle, image, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
