import { Pressable, StyleSheet } from 'react-native'
import AppText from './AppText'

const PickerItem = ({ label, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
    >
      <AppText style={styles.text}>{label}</AppText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})

export default PickerItem