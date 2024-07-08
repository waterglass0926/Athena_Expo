import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SvgXml } from 'react-native-svg';
import { useNavigation, useTheme } from '@react-navigation/native';

import { SCText } from './SCText';
import Constants from '@/constants';

export const BottomTabs = ({ state, navigation }) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const getTitle = key => {
    switch (key) {
      case 'home':
        return {
          icon: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.HomeTabIcon}
            width={25}
            height={25}
          />,
          iconActive: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.HomeTabIconActive}
            width={25}
            height={25}
          />,
          title: 'Home',
        };
      case 'dms':
        return {
          icon: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.DMTabIcon}
            width={25}
            height={25}
          />,
          iconActive: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.DMTabIconActive}
            width={25}
            height={25}
          />,
          title: 'DMs',
        };
      case 'mentions':
        return {
          icon: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.MentionsTabIcon}
            width={25}
            height={25}
          />,
          iconActive: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.MentionsTabIconActive}
            width={25}
            height={25}
          />,
          title: 'Mention',
        };
      case 'you':
        return {
          icon: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.YouTabIcon}
            width={25}
            height={25}
          />,
          iconActive: <SvgXml
            xml={Constants.SVGS.SLACK.CHANNEL.YouTabIconActive}
            width={25}
            height={25}
          />,
          title: 'You',
        };
    }
  };
  return (
    <View
      style={[
        {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          paddingBottom: insets.bottom,
        },
        styles.tabListContainer,
      ]}>
      {state.routes.map((route, index) => {
        const tab = getTitle(route.name);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
            {isFocused ? tab.iconActive : tab.icon}
            <SCText style={styles.tabTitle}>{tab.title}</SCText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabListContainer: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
  },
  tabContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 12,
  },
});
