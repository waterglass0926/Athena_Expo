import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import Components from '@/components/disney/v2';

export function Home({ id, setId, type, setType, setSearchable }) {
  const { theme } = useSelector(state => state.athena);
  const tvDiscovery = ['popular', 'top_rated', 'on_the_air', 'airing_today'];

  let discovery =
    type == 'movie'
      ? 'upcoming'
      : tvDiscovery[Math.floor(Math.random() * tvDiscovery.length)];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <ScrollView>
        <View>
          <Components.NavBar setSearchable={setSearchable} />
        </View>
        <View>
          <Components.Category setType={setType} />
        </View>
        <View>
          <Components.Banner type={type} discovery={discovery} setId={setId} />
        </View>
        <View>
          <Components.Genres type={type} />
        </View>
        <View>
          <Components.Item key='popular' discovery='popular' type={type} setId={setId} />
        </View>
        <View>
          <Components.Item key='top_rated' discovery='top_rated' type={type} setId={setId} />
        </View>
        {type == 'movie' ? (
          <>
            <View>
              <Components.Item key='now_playing' discovery='now_playing' type={type} setId={setId} />
            </View>
            <View>
              <Components.Item key='upcoming' discovery='upcoming' type={type} setId={setId} />
            </View>
          </>
        ) : (
          <>
            <View>
              <Components.Item key='on_the_air' discovery='on_the_air' type={type} setId={setId} />
            </View>
            <View>
              <Components.Item key='airing_today' discovery='airing_today' type={type} setId={setId} />
            </View>
          </>
        )}

        <View>
          <Components.Footer />
        </View>

        <StatusBar style='light' />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
