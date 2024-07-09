import * as React from 'react';

import {
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

import MoreOptions from '@/assets/data/spotify/menu-more-options.json';
import Components from '@/components/spotify';
import Constants from '@/constants';
import Device from '@/utils/device';
import Images from '@/utils/preload/images';
import Context from '@/contexts/spotify/CreateContext';

export function ModalMoreOptions({ navigation, route }) {
  const { album } = route.params;

  // get main app state
  const { showMusicBar, updateState } = React.useContext(Context);

  return (
    <React.Fragment>
      <SafeAreaView style={styles.containerSafeArea}>
        <TouchableWithoutFeedback
          onPress={() => {
            // update main state
            updateState('showMusicBar', !showMusicBar);

            navigation.goBack();
          }}
        >
          <View style={styles.containerButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

      <ScrollView
        contentContainerStyle={[Constants.STYLES.SPOTIFY.flex1, Constants.STYLES.SPOTIFY.pB80]}
        showsVerticalScrollIndicator={false}
        style={[Constants.STYLES.SPOTIFY.container, styles.transparent]}
      >
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image source={Images[album.image]} style={styles.image} />
          </View>
          <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>

        {Object.keys(MoreOptions).map((index) => {
          const item = MoreOptions[index];

          return (
            <Components.LineItemCategory
              key={item.id}
              disableRightSide
              icon={item.icon}
              iconLibrary={item.lib}
              onPress={() => null}
              title={item.title}
            />
          );
        })}
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerSafeArea: {
    ...Constants.STYLES.SPOTIFY.containerAbsolute,
    backgroundColor: Constants.COLORS.SPOTIFY.blackBlur
  },
  containerButton: {
    ...Constants.STYLES.SPOTIFY.flexCenter,
    ...Constants.STYLES.SPOTIFY.spacer6
  },
  buttonText: {
    color: Constants.COLORS.SPOTIFY.white,
    fontSize: 18
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  container: {
    alignItems: 'center',
    paddingTop: Device.iPhoneNotch ? 94 : 50
  },
  containerImage: {
    shadowColor: Constants.COLORS.SPOTIFY.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6
  },
  image: {
    height: 148,
    marginBottom: 16,
    width: 148
  },
  title: {
    color: Constants.COLORS.SPOTIFY.white,
    fontFamily: Constants.FONTS.SPOTIFY.spotifyBold,
    fontSize: 20,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: 'center'
  },
  albumInfo: {
    color: Constants.COLORS.SPOTIFY.greyInactive,
    fontFamily: Constants.FONTS.SPOTIFY.spotifyRegular,
    fontSize: 12,
    marginBottom: 48
  }
});