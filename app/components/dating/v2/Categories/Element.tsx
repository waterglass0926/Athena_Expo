import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '@/styles/dating/v2/categories';

export function CategoriesElement({ title, navigation }) {
  const { theme } = useSelector(state => state.athena);

  const navigateEvents = () => {
    navigation.navigate('DatingV2EventsHome', { title: title });
  };

  return (
    <TouchableOpacity
      style={{ borderRadius: 16 }}
      onPress={() => navigateEvents()}
    >
      <View style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          source={require('@/assets/images/dating/v2/categoriesbg.png')}
          style={{
            width: 170,
            height: 170,
          }}
        />
      </View>
      <View style={styles.categoriesCardContent}>
        <Text style={styles.categoriesCardContentTitle}>{title} </Text>
        {title === 'FESTIVAL' && (
          <Image
            source={require('@/assets/images/dating/v2/festival.png')}
            style={styles.categoriesCardContentImg}
          />
        )}
        {title === 'KONSER' && (
          <Image
            source={require('@/assets/images/dating/v2/sing.png')}
            style={styles.categoriesCardContentImg}
          />
        )}
        {title === 'SERGİ' && (
          <Image
            source={require('@/assets/images/dating/v2/sergi.png')}
            style={styles.categoriesCardContentImg}
          />
        )}
        {title === 'TİYATRO' && (
          <Image
            source={require('@/assets/images/dating/v2/tiyatro.png')}
            style={styles.categoriesCardContentImg}
          />
        )}
        {title === 'SPORTIF' && (
          <Image
            source={require('@/assets/images/dating/v2/sports.png')}
            style={styles.categoriesCardContentImg}
          />
        )}
        {title === 'TALKSHOW' && (
          <Image
            source={require('@/assets/images/dating/v2/talkshow.png')}
            style={{
              position: 'absolute',
              bottom: -20,
              right: 45,
              width: 80,
              height: 80,
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};