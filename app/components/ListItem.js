import { Image, StyleSheet, View } from 'react-native';
import AppText from './AppText';
import colors from '../utils/color';

const avatarDiameter = 70;
const { medium } = colors;

const ListItem = ({title, subTitle, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode={'stretch'}/>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: avatarDiameter,
    height: avatarDiameter,
    borderRadius: avatarDiameter / 2.0,
    marginRight: 10,
  },
  subTitle: {
    color: medium
  },
  title: {
    fontWeight: 500
  },
})