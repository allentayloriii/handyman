import { Pressable, StyleSheet } from 'react-native'
import AppText from './AppText'

const PickerItem = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
    >
      <AppText style={styles.text}>{item.label}</AppText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})

export default PickerItem