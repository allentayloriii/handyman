import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* Implementation of external padding style to screen is platform dependent */}
      {(Platform.OS === 'android') ? 
        children :
        <View style={[{flex: 1}, style]}>
          {children}
        </View>
      }
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
})