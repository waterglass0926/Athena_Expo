import React, { useEffect } from 'react';

import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import {
  StyleSheet,
  Image,
  View,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const ImageInput = ({ imageUri, onChangeImage }) => {

  const requestPermissions = async () => {
    const { status } = ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'denied') {
      alert('Sorry, we need camera roll permissions to make this work!');
    };
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      Functions.isLog(2, error);
    };
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'yes', onPress: () => onChangeImage(null) },
      { text: 'no' },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (<Icon type='material-community' name='camera' color={Constants.COLORS.UBEREATS.medium} size={35} />) :
          (
            <Image style={styles.image} source={{ uri: imageUri }} />
          )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.COLORS.UBEREATS.light,
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
