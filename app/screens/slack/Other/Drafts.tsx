import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';

import Components from '@/components/slack';
import { AsyncStore, ChatClientService } from '@/utils/slack';

export const Drafts = () => {
  const [results, setResults] = useState([]);
  const chatClient = ChatClientService?.getClient();
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    const getDraftMessages = async () => {
      const keys = await AsyncStore.getAllKeys();
      const draftKeys = keys.filter(k => {
        return k.indexOf(`@slack-clone-draft-${chatClient.user.id}`) === 0;
      });

      const items = await AsyncStore.multiGet(draftKeys);
      const drafts = items.map(i => {
        const draft = JSON.parse(i[1]);
        return draft;
      });

      setResults(drafts.filter(r => !!r.text));
    };

    getDraftMessages();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
      }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftContent}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Components.SCText style={styles.backIcon}>{'‹'}</Components.SCText>
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Components.SCText style={styles.headerTitle}>Drafts</Components.SCText>
          </View>
        </View>
        <FlatList
          data={results}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[
                  styles.draftItemContainer,
                  {
                    borderBottomColor: colors.border,
                  },
                ]}
                onPress={() => {
                  navigation.navigate('Channel', {
                    channelId: item.channelId,
                  });
                }}>
                <Components.SCText
                  style={[
                    styles.draftChannelTitle,
                    {
                      color: colors.boldText,
                    },
                  ]}>
                  {item.title}
                </Components.SCText>
                <Components.SCText style={styles.draftMessageText}>{item.text}</Components.SCText>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Components.NewMessageBubble
        onPress={() => {
          navigation.navigate('NewMessage');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headerContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  leftContent: {
    flexDirection: 'row',
  },
  draftItemContainer: {
    padding: 12,
    paddingLeft: 20,
    borderBottomWidth: 0.3,
  },
  draftChannelTitle: {
    fontWeight: 'bold',
  },
  draftMessageText: {
    marginTop: 10,
    fontWeight: '400',
  },
  backIcon: {
    fontSize: 35,
    textAlign: 'left',
  },
  headerTitle: {
    fontWeight: '900',
    fontSize: 17,
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
