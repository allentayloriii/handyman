import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Pressable, StyleSheet, View } from 'react-native'
import colors from '../utils/color'

import AppText from './AppText'

const { white, light, medium } = colors

const IconListItem = ({ iconName, title, iconColor= white, backgroundColor = '#fff', size = 45 }) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        { backgroundColor: (pressed) ? light : white },
        styles.iconListItem
      ]}
    >
      <View 
        style={[
          { backgroundColor,
            width: size,
            height: size,
            borderRadius: size / 2.0, 
          }, 
          styles.itemIcon
        ]}
      >
        <MaterialCommunityIcons
          name={iconName}
          color={iconColor}
          size={size * 0.5}
        />
      </View>
      <AppText style={styles.itemTitle}>{title}</AppText>
    </Pressable>
  )
}

export default IconListItem

const styles = StyleSheet.create({
  iconListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  itemIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  itemTitle: {
    fontWeight: '500',
    textTransform: 'capitalize'
  },
})