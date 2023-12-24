import { Platform, Pressable, StyleSheet, Text } from 'react-native'
import colors from '../utils/color'

const { primary, white } = colors;

const AppButton = ({text, onPress, color = primary}) => {
  return ( 
    <Pressable 
      style={({pressed}) => [
        { 
          backgroundColor: color, 
          opacity: pressed ? 0.7 : 1,
        }, 
        styles.container
      ]}
      onPress={() => onPress()}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable> 
  )
}

export default AppButton

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10
  }, 
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    color: white
  }
})