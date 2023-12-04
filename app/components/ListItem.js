import { Image, Pressable, StyleSheet, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../utils/color';
import AppText from './AppText';

const avatarDiameter = 70;
const { medium, light, white } = colors;

const ListItem = ({title, subTitle, image, IconComponent, onPress, renderRightActions}) => {
  return (
      <Swipeable renderRightActions={renderRightActions}>
        <Pressable
          style={({pressed}) => [
            { backgroundColor: (pressed) ? light : white }
          ]}
          onPress={onPress}
        >
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} resizeMode={'stretch'}/>}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </Pressable>
      </Swipeable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: avatarDiameter,
    height: avatarDiameter,
    borderRadius: avatarDiameter / 2.0,
  },
  subTitle: {
    color: medium
  },
  title: {
    fontWeight: 500
  },
})