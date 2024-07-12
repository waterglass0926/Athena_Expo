import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import {
  Camera,
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync,
  CameraType,
  FlashMode,
} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { useIsFocused } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

/**
 * Function that renders a component responsible showing
 * a view with the camera preview, recording videos, controling the camera and
 * letting the user pick a video from the gallery
 * @returns Functional Component
 */
export function Cameras() {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);

  const [galleryItems, setGalleryItems] = useState<MediaLibrary.Asset[]>([]);

  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [cameraFlash, setCameraFlash] = useState(FlashMode.off);

  const [isCameraReady, setIsCameraReady] = useState(false);
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraStatus = await requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status == 'granted');

      const audioStatus = await requestMicrophonePermissionsAsync();
      setHasAudioPermissions(audioStatus.status == 'granted');

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.status == 'granted');

      if (galleryStatus.status == 'granted') {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ['creationTime'],
          mediaType: ['video'],
        });
        setGalleryItems(userGalleryMedia.assets);
      }
    })();
  }, []);

  const recordVideo = async () => {
    if (cameraRef) {
      try {
        const options = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality['480'],
        };
        const videoRecordPromise = cameraRef.recordAsync(options);
        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          const source = data.uri;
          let sourceThumb = await generateThumbnail(source);
          if (sourceThumb) {
            navigation.navigate('TikTokV2SavePost', { source, sourceThumb });
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const stopVideo = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
    }
  };

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      const sourceThumb = await generateThumbnail(result.assets[0].uri);
      if (sourceThumb) {
        navigation.navigate('TikTokV2SavePost', {
          source: result.assets[0].uri,
          sourceThumb,
        });
      }
    }
  };

  const generateThumbnail = async (source: string) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(source, {
        time: 5000,
      });
      return uri;
    } catch (e) {
      console.warn(e);
    }
  };

  if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
    return <View></View>;
  }

  return (
    <View style={styles.container}>
      {isFocused ? (
        <Camera
          ref={(ref) => setCameraRef(ref)}
          style={styles.camera}
          ratio={'16:9'}
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}

      <View style={styles.sideBarContainer}>
        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraType(
              cameraType === CameraType.back
                ? CameraType.front
                : CameraType.back,
            )
          }
        >
          <Feather name='refresh-ccw' size={24} color={'white'} />
          <Text style={styles.iconText}>Flip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraFlash(
              cameraFlash === FlashMode.off ? FlashMode.torch : FlashMode.off,
            )
          }
        >
          <Feather name='zap' size={24} color={'white'} />
          <Text style={styles.iconText}>Flash</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBarContainer}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.recordButtonContainer}>
          <TouchableOpacity
            disabled={!isCameraReady}
            onLongPress={() => recordVideo()}
            onPressOut={() => stopVideo()}
            style={styles.recordButton}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => pickFromGallery()}
            style={styles.galleryButton}
          >
            {galleryItems[galleryItems.length - 1] == undefined ? (
              <></>
            ) : (
              <Image
                style={styles.galleryButtonImage}
                source={{ uri: galleryItems[galleryItems.length - 1].uri }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    backgroundColor: 'black',
    aspectRatio: 9 / 16,
  },
  bottomBarContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginBottom: 30,
  },
  recordButtonContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  recordButton: {
    borderWidth: 8,
    borderColor: '#ff404087',
    backgroundColor: '#ff4040',
    borderRadius: 100,
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: 50,
    height: 50,
  },
  galleryButtonImage: {
    width: 50,
    height: 50,
  },
  sideBarContainer: {
    top: 60,
    right: 0,
    marginHorizontal: 20,
    position: 'absolute',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
  sideBarButton: {
    alignItems: 'center',
    marginBottom: 25,
  },
});