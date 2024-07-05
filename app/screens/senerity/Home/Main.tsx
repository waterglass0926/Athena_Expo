import * as React from 'react';

import { FlatList, Linking, RefreshControl, SectionList, StyleSheet, View } from 'react-native';

import { capitalize } from 'lodash';
import { useQuery } from 'react-query';
import analytics from '@react-native-firebase/analytics';
import { Headline, Screen, Title } from '@serenity/components';
import { Card, Paragraph, useTheme } from 'react-native-paper';

import Components from '@/components/serenity';
import { getMedia } from '@/services/apis/senerity/supabase';

const Divider = () => <View style={{ marginVertical: 8 }} />;

export function Main({ navigation }) {

  const { colors } = useTheme();

  function navigateToMedia(item: any) {
    analytics().logSelectItem({
      content_type: item.type,
      item_list_id: item.title,
      item_list_name: item.title
    })
    if (item.type === 'meditation') {
      navigation.navigate('SenerityMeditation', { meditation: item })
    } else if (item.type === 'podcast') {
      navigation.navigate('SenerityPodcast', { podcast: item })
    } else {
      navigation.navigate('SeneritySongs', { playlist: item });
    };
  };

  const { isLoading, refetch, data } = useQuery(['media'], getMedia, {
    initialData: []
  });

  return (
    <Screen>
      <Components.NetNotify />
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        refreshing={isLoading}
        onRefresh={refetch}
        ListHeaderComponent={() => (
          <>
            <Components.ShortCutContainer />
            <Components.QuoteCard />
            <Divider />
          </>
        )}
        refreshControl={
          <RefreshControl
            progressViewOffset={32}
            refreshing={isLoading}
            onRefresh={refetch}
            colors={['#12c2e9', '#c471ed', '#f64f59']}
            progressBackgroundColor={colors.surface}
            titleColor={colors.text}
            tintColor={colors.primary}
          />
        }
        renderSectionHeader={({ section }) => {
          if (section.title !== 'post') {
            return (
              <>
                <View
                  style={styles.titleContainer}
                >
                  <Components.Headline>{capitalize(section.title)}</Components.Headline>
                </View>
                <FlatList
                  horizontal
                  data={section.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => <Components.Media item={item} onPress={navigateToMedia} />}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            )
          };

          return null;
        }}
        renderItem={({ item, section }) => {
          if (section.title === 'post') {
            return (
              <Card style={{ margin: 12 }} onPress={() => Linking.openURL(item.url)}>
                <Card.Cover source={{ uri: item.cover }} />
                <Card.Content>
                  <Title>{item.title}</Title>
                  <Paragraph numberOfLines={3}>{item.description}</Paragraph>
                </Card.Content>
              </Card>
            )
          }
          return null;
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  }
});