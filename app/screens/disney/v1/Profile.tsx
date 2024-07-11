import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import SvgBackground from '@/assets/svgs/disney/v1/Svg.Background';
import Components from '@/components/disney/v1';
import ConstantsForDisney from '@/constants';

const alertSignOut = () => {
  Alert.alert(
    'Sign Out',
    'Are you sure that you want to sign out?',
    [{ text: 'No' }, { text: 'Yes' }],
    { cancelable: false }
  );
};

export const Profile = ({ navigation }) => (
  <View style={ConstantsForDisney.STYLES.DISNEY.V1.container}>
    <View style={ConstantsForDisney.STYLES.DISNEY.V1.posAbsolute}>
      <SvgBackground />
    </View>

    <Components.HeaderAccounts navigation={navigation} />

    <ScrollView>
      <Components.TouchLineItem
        onPress={() => navigation.navigate('DisneyV1ProfileWatchlist')}
        text='Watchlist'
      />
      <Components.TouchLineItem
        onPress={() => navigation.navigate('DisneyV1ProfileAppSettings')}
        text='App Settings'
      />
      <Components.TouchLineItem onPress={() => null} text='Account' />
      <Components.TouchLineItem onPress={() => null} text='Legal' />
      <Components.TouchLineItem onPress={() => null} text='Help' />
      <Components.TouchLineItem onPress={() => alertSignOut()} text='Log Out' />

      <Text style={styles.versionText}>
        {`Version: ${Constants?.manifest?.version}`}
      </Text>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  versionText: {
    color: ConstantsForDisney.COLORS.DISNEY.V1.inactiveGrey,
    fontFamily: ConstantsForDisney.FONTS.ATHENA.PRIMARY,
    fontSize: 18,
    marginLeft: 16,
    paddingVertical: 16
  }
});