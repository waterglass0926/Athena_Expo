import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Components from '@/components/tiktok/v2';
import { saveUserField } from '@/services/apis/tiktok/v2/user';
import { general } from '@/styles/tiktok/v2';

export function EditProfileField({ route }) {
  const { title, field, value } = route.params;
  const [textInputValue, setTextInputValue] = useState(value);
  const navigation = useNavigation();

  const onSave = () => {
    saveUserField(field, textInputValue).then(() => navigation.goBack());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Components.NavBarGeneral
        title={title}
        rightButton={{ display: true, name: 'save', action: onSave }}
      />
      <Divider />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={general.textInput}
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'gray',
  },
});
