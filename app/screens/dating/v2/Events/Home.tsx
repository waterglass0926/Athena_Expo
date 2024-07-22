import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import { SearchCard } from '@/components/dating/v2/Search/Card';
import { getEventsByCategory } from '@/services/apis/dating/v2/categories';
import { styles } from '@/styles/dating/v2/categories';

export function EventsHome({ route, navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsByCategory = getEventsByCategory(route.params.title);
    setEvents(eventsByCategory);
  }, []);

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <SearchCard
            title={item.Adi}
            image={item.KucukAfis}
            date={item.EtkinlikBaslamaTarihi}
            location={item.EtkinlikMerkezi}
            onPress={() => navigation.navigate('DatingV2EventsDetail', { id: item.Id })}
          />
        )}
        keyExtractor={(item) => item.Id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};