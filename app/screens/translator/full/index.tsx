import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { useRoute } from '@/hooks/translator/useRoute';
import { useNavigation } from '@/hooks/translator/useNavigation';
import { ThemeType } from '@/types/athena';

export interface FullProps {
  color: string;
  content: string;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Full = () => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const {
    params: { color, content },
  } = useRoute<'Full'>();

  return (
    <Pressable
      onPress={goBack}
      style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.viewText}>
        <AutoSizeText style={{ color: theme.FORECOLOR }} mode={ResizeTextMode.group}>
          {content}
        </AutoSizeText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    width: hp('100%') - 160,
    height: wp('100%') - 80,
    transform: [{ rotate: '90deg' }],
  }
});