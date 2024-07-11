import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
// import * as Device from 'expo-device';

import SvgBackground from '@/assets/svgs/disney/v1/Svg.Background';
import SvgTrash from '@/assets/svgs/disney/v1/Svg.Trash';
import Components from '@/components/disney/v1';
import ConstantsForDisney from '@/constants';

const alertDeleteDownloads = () => {
  Alert.alert(
    'Delete All Downloads',
    'Are you sure you want to delete this one download?',
    [
      {
        text: 'Cancel'
      },
      {
        style: 'destructive',
        text: 'Delete'
      }
    ],
    {
      cancelable: false
    }
  );
};

export const ProfileAppSettings = ({ navigation }) => {
  const { platform } = Constants;
  let deviceType = 'Unknown Device';

  // is iOS?
  // if (typeof platform.ios !== 'undefined') {
  //   deviceType = Device.modelName;
  // }

  return (
    <View style={ConstantsForDisney.STYLES.DISNEY.V1.container}>
      <View style={ConstantsForDisney.STYLES.DISNEY.V1.posAbsolute}>
        <SvgBackground />
      </View>

      <ScrollView>
        <Components.Header showBack title='App Settings' navigation={navigation} />

        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Video Playback</Text>
        </View>

        <Components.TouchLineItemApp
          onPress={() => null}
          tagline='Automatic'
          text='Cellular Data Usage'
        />

        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Downloads</Text>
        </View>

        <Components.TouchLineItemApp
          onPress={() => null}
          tagline='Standard'
          text='Video Quality'
        />

        <Components.TouchLineItemElement
          onPress={() => alertDeleteDownloads()}
          element={<SvgTrash size={20} />}
          text='Delete All Downloads'
        />

        <View style={styles.containerDevice}>
          <Text style={styles.deviceText}>{deviceType}</Text>
          <View style={styles.containerStorage}>
            <View style={styles.storageUsed} />
            <View style={styles.storageDisneyPlus} />
          </View>
          <View style={styles.containerIndex}>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.used]} />
              <Text style={styles.deviceText}>Used</Text>
            </View>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.disneyPlus]} />
              <Text style={styles.deviceText}>Disney+</Text>
            </View>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.storage]} />
              <Text style={styles.deviceText}>Free</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeading: {
    borderBottomColor: ConstantsForDisney.COLORS.DISNEY.V1.moreSectionBorder,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  heading: {
    color: ConstantsForDisney.COLORS.DISNEY.V1.moreSectionText,
    fontFamily: ConstantsForDisney.FONTS.ATHENA.PRIMARY,
    fontSize: 16,
    textTransform: 'uppercase'
  },
  containerDevice: {
    borderBottomColor: ConstantsForDisney.COLORS.DISNEY.V1.moreSectionBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 8,
    paddingVertical: 8
  },
  deviceText: {
    color: ConstantsForDisney.COLORS.DISNEY.V1.white
  },
  containerStorage: {
    backgroundColor: ConstantsForDisney.COLORS.DISNEY.V1.moreFree,
    flexDirection: 'row',
    height: 10,
    marginVertical: 8,
    width: '100%'
  },
  storageUsed: {
    backgroundColor: ConstantsForDisney.COLORS.DISNEY.V1.moreUsed,
    height: '100%',
    width: '24%'
  },
  storageDisneyPlus: {
    backgroundColor: ConstantsForDisney.COLORS.DISNEY.V1.storageBlue,
    height: '100%',
    width: '4%'
  },
  containerIndex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerIndexBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  indexBlock: {
    borderRadius: 3,
    height: 14,
    marginRight: 10,
    width: 14
  },
  storage: {
    backgroundColor: ConstantsForDisney.COLORS.DISNEY.V1.moreFree
  },
  used: {
    backgroundColor: ConstantsForDisney.COLORS.DISNEY.V1.moreUsed
  },
  disneyPlus: {
    backgroundColor: ConstantsForDisney.COLORS.DISNEY.V1.storageBlue
  }
});