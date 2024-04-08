import { Image } from "react-native-expo-image-cache";
import { Pressable, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../utils/color";

const { secondary, white } = colors;

const Card = ({ title, subTitle, imageURL, onPress, thumbnailUrl }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          uri={imageURL}
          tint="light"
        />
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
