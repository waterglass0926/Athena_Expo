import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Components from '@/components/slack';
import { ChatClientService } from '@/utils/slack';

export const ChannelList = props => {
  const chatClient = ChatClientService?.getClient();
  const { colors } = useTheme();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Components.ScreenHeader title='getstream' showLogo />
        <Components.ChannelSearchButton />

        <View style={styles.listContainer}>
          <Components.ChannelList client={chatClient} />
        </View>
      </View>
      <Components.NewMessageBubble />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
});
