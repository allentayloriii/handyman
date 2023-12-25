import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/color';
import defaultStyles from '../utils/styles';

const { light, medium, dark } = colors;

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, {width: width}]}>
      {icon && 
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon} 
          size={20}
          color={medium}
        />
      }
      <TextInput
        placeholderTextColor={medium}
        styles={defaultStyles.text}
        {...otherProps}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },  
  icon: {
    marginRight: 10
  },
})