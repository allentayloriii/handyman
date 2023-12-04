import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../utils/color'

const { black, white } = colors;
const Icon = ({ name, size = 40, backgroundColor = black, iconColor = white}) => {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <MaterialCommunityIcons 
        name={name}
        color={iconColor}
        size={size * 0.5}
      />
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({

})