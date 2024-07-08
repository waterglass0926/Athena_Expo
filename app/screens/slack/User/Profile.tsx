import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

import Components from '@/components/slack';
import Constants from '@/constants';
import { ChatClientService, notImplemented } from '@/utils/slack';

export const Profile = props => {
  const { colors } = useTheme();
  const chatClient = ChatClientService?.getClient();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <View style={{ flex: 1 }}>
        <Components.ScreenHeader navigation={props.navigation} title='You' />
        <View style={styles.container}>
          <View style={styles.row}>
            <View>
              <Image
                style={styles.userImage}
                source={{
                  uri: chatClient.user.image,
                }}
              />
            </View>
            <View style={styles.userDetails}>
              <Components.SCText style={styles.userName}>
                {chatClient.user.name} {chatClient.user.status}
              </Components.SCText>
              <Components.SCText style={styles.status}>Active</Components.SCText>
            </View>
          </View>
          <TouchableOpacity
            onPress={notImplemented}
            style={[
              {
                padding: 13,
                borderWidth: 1,
                marginTop: 20,
                paddingLeft: 20,
                borderRadius: 10,
              },
              {
                borderColor: colors.border,
              },
            ]}>
            <Components.SCText style={{ fontSize: 14 }}>Whats your status</Components.SCText>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 30,
            }}>
            <View
              style={[
                styles.actionItemSection,
                {
                  borderTopColor: colors.border,
                  borderTopWidth: 0.5,
                },
              ]}>
              <TouchableOpacity
                style={styles.actionItemContainer}
                onPress={notImplemented}>
                <SvgXml
                  xml={Constants.SVGS.SLACK.CHANNEL.DNDIcon}
                  width={23}
                  height={23}
                />
                <Components.SCText style={{ paddingLeft: 20 }}>{'Do not disturb'}</Components.SCText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionItemContainer}
                onPress={notImplemented}>
                <SvgXml
                  xml={Constants.SVGS.SLACK.CHANNEL.AwayIcon}
                  width={23}
                  height={23}
                />
                <Components.SCText style={{ paddingLeft: 20 }}>{'Set yourself away'}</Components.SCText>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.actionItemSection,
                {
                  borderTopColor: colors.border,
                  borderTopWidth: 0.5,
                },
              ]}>
              <TouchableOpacity
                style={styles.actionItemContainer}
                onPress={notImplemented}>
                <SvgXml
                  xml={Constants.SVGS.SLACK.CHANNEL.NotificationsIcon}
                  width={23}
                  height={23}
                />
                <Components.SCText style={{ paddingLeft: 20 }}>{'Notifications'}</Components.SCText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionItemContainer}
                onPress={notImplemented}>
                <SvgXml
                  xml={Constants.SVGS.SLACK.CHANNEL.PreferencesIcon}
                  width={23}
                  height={23}
                />
                <Components.SCText style={{ paddingLeft: 20 }}>{'Preferences'}</Components.SCText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionItemContainer}
                onPress={notImplemented}>
                <SvgXml
                  xml={Constants.SVGS.SLACK.CHANNEL.SavedItemsIcon}
                  width={23}
                  height={23}
                />
                <Components.SCText style={{ paddingLeft: 20 }}>{'Saved items'}</Components.SCText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionItemContainer}
                onPress={notImplemented}>
                <SvgXml
                  xml={Constants.SVGS.SLACK.CHANNEL.ViewProfileIcon}
                  width={23}
                  height={23}
                />
                <Components.SCText style={{ paddingLeft: 20 }}>{'View profile'}</Components.SCText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  userDetails: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    padding: 8,
    paddingLeft: 20,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 7,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  status: {
    fontSize: 12,
    fontWeight: '400',
  },
  actionItemSection: {},
  actionItemContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
});
