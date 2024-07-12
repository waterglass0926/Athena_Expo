import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Components from '@/components/tiktok/v2';

import { saveUserProfileImage } from '@/services/apis/tiktok/v2/user';

export function EditProfile() {
  const auth = useSelector(state => state.tiktokV2Auth);
  const navigation = useNavigation();

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      saveUserProfileImage(result.assets[0].uri);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <Components.NavBarGeneral title='Edit Profile' />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.imageViewContainer}
          onPress={() => chooseImage()}
        >
          {auth.currentUser && (
            <Image
              style={styles.image}
              source={{ uri: auth.currentUser.photoURL }}
            />
          )}
          <View style={styles.imageOverlay} />
          <Feather name='camera' size={26} color='white' />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldsContainer}>
        <TouchableOpacity
          style={styles.fieldItemContainer}
          onPress={() =>
            navigation.navigate('TikTokV2EditProfileField', {
              title: 'Display Name',
              field: 'displayName',
              value:
                auth.currentUser && auth.currentUser.displayName
                  ? auth.currentUser.displayName
                  : '',
            })
          }
        >
          <Text>Display Name</Text>
          <View style={styles.fieldValueContainer}>
            <Text>{auth.currentUser ? auth.currentUser.displayName : ''}</Text>
            <Feather name='chevron-right' size={20} color='gray' />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageViewContainer: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    position: 'absolute',
  },
  imageOverlay: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    ...(StyleSheet.absoluteFill as object),
  },

  fieldsContainer: {
    marginTop: 20,
    padding: 20,
    flex: 1,
  },
  fieldItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});