import { View, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/color'

const { light } = colors;
const ListItemSeparator = () => {
  return (
    <View style={styles.separator}/>
  )
}

export default ListItemSeparator

const styles = StyleSheet.create({
  separator: { 
    width: '100%', 
    height: 1, 
    backgroundColor: light 
  }
})