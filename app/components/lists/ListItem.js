import { Image, Pressable, StyleSheet, View } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import colors from "../../utils/color";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const avatarDiameter = 70;
const { medium, light, white } = colors;

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? light : white },
          ]}
          onPress={onPress}
        >
          <View style={styles.container}>
            {IconComponent}
            {image && (
              <Image
                style={styles.image}
                source={image}
                resizeMode={"stretch"}
              />
            )}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={medium}
            />
          </View>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: avatarDiameter,
    height: avatarDiameter,
    borderRadius: avatarDiameter / 2.0,
  },
  subTitle: {
    color: medium,
  },
  title: {
    fontWeight: 500,
  },
});
