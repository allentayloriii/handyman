import { Image, StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import React, { useEffect } from 'react';
import colors from '../utils/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const { light, medium } = colors;

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to grant permission to access the library.');
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(imageUri) },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    try {
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!canceled) onChangeImage(assets.at(0).uri);
    } catch (err) {
      console.log('Error reading an image', err);
    }
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons color={medium} name='camera' size={40} />
        )}
      </View>
    </Pressable>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
