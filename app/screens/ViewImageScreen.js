import { Image, StyleSheet, View } from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        source={require('../assets/chair.jpg')}
        resizeMode='contain'
      />
    </View>
  );
}

export default ViewImageScreen

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'salmon',
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%'
  }
})