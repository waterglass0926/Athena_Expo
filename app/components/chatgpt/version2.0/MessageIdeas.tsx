import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

const PredefinedMessages = [
  { title: 'Explain React Native', text: 'like I\'m five years old' },
  { title: 'Suggest fun activites', text: 'for a family visting San Francisco' },
  { title: 'Recommend a dish', text: 'to impress a date who\'s a picky eater' },
];

type PropsType = {
  onSelectCard: (message: string) => void;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const MessageIdeas = ({ onSelectCard }: PropsType) => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          gap: 16,
        }}>
        {PredefinedMessages.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => onSelectCard(`${item.title} ${item.text}`)}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.title}</Text>
            <Text style={{ color: Constants.COLORS.CHATGPT.V2.GREY, fontSize: 14 }}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 14,
    backgroundColor: Constants.COLORS.CHATGPT.V2.INPUT,
    borderRadius: 10,
  },
});