import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Components from '@/components/tiktok/v2';
import { queryUsersByEmail } from '@/services/apis/tiktok/v2/user';
import { SearchUser } from '@/types/tiktok/v2';

export function Search() {
  const [textInput, setTextInput] = useState('');
  const [searchUsers, setSearchUsers] = useState<SearchUser[]>([]);

  useEffect(() => {
    queryUsersByEmail(textInput).then((users) => setSearchUsers(users));
  }, [textInput]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setTextInput}
        style={styles.textInput}
        placeholder={'Search'}
      />
      <FlatList
        data={searchUsers}
        renderItem={({ item }) => <Components.SearchUserItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    margin: 10,
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 4,
  },
});
