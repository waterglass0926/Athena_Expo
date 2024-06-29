import React, { useContext, useRef } from 'react';

import { Icon } from 'react-native-elements';

import { Pressable, StyleSheet, TextInput } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { TranslateContext } from '@/contexts/translator/TranslateContext';

export const HomeInput = () => {
  const inputRef = useRef<TextInput>(null);

  const { text, onChangeText, clear, applyClipboard } =
    useContext(TranslateContext);

  return (
    <Pressable
      onPress={() => inputRef.current?.focus()}
      style={styles.container}>
      <Components.InputBase
        ref={inputRef}
        placeholder='max 5000'
        multiline
        value={text}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Components.ButtonBorderLess
        onPress={text ? clear : applyClipboard}
        style={styles.claerBtn}>
        {text ? (
          <Icon type='material-community' name='close-circle-outline' color='#bbb' size={16} />
        ) : (
          <Icon type='material-community' name='clipboard-arrow-up-outline' color='#bbb' size={16} />
        )}
      </Components.ButtonBorderLess>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginVertical: 56,
    width: '100%',
  },
  claerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    width: 32,
    height: 32,
  },
});