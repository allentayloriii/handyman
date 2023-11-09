import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

export default function WelcomeScreen(props) {
  return (
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/logo-red.png')}
            style={styles.logo}
          />
          <Text>Sell What You Dont Need</Text>
        </View>
        <View
          style={styles.loginButton}
        ></View>
        <View
          style={styles.registerButton}
        ></View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'salmon'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'lightblue'
  },
})