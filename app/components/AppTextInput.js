import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../utils/color'
import defaultStyles from '../utils/styles'

const { light, medium, dark } = colors;

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && 
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon} 
          size={20}
          color={medium}
        />
      }
      <TextInput 
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
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },  
  icon: {
    marginRight: 10
  },
})