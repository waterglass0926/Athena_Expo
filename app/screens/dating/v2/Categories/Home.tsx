import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { CategoriesElement } from '@/components/dating/v2/Categories/Element';
import { getCategories } from '@/services/apis/dating/v2/categories';
import { styles } from '@/styles/dating/v2/categories';

export function CategoriesHome({ navigation }) {
  const { theme } = useSelector(state => state.athena);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesData = getCategories();
    setCategories(categoriesData);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: theme.BACKCOLOR, flex: 1 }}>
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: theme.FORECOLOR
          }}
        >
          Categories
        </Text>
      </View>
      <View style={styles.categoriesCards}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoriesElement title={item} navigation={navigation} />
          )}
          numColumns={2}
          style={{ width: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
};