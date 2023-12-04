import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import colors from '../utils/color';

const { danger, white } = colors;
const ListItemDeleteAction = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='trash-can'
          size={35}
          color={white} />
      </View>
    </Pressable>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
  container: {
    backgroundColor: danger,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})