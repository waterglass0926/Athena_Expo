import React from 'react';

import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import Components from '@/components/translator';
import Constants, { HEIGHT, WIDTH } from '@/constants';
import Functions from '@/utils';
import { useRoute } from '@/hooks/translator/useRoute';
import { useNavigation } from '@/hooks/translator/useNavigation';

export interface FullProps {
  color: string;
  content: string;
}

export const Full = () => {
  const {
    params: { color, content },
  } = useRoute<'Full'>();
  const { goBack } = useNavigation();

  return (
    <Pressable
      onPress={goBack}
      style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.textContainer}>
        <AutoSizeText style={styles.text} mode={ResizeTextMode.group}>
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
  textContainer: {
    width: HEIGHT - 160,
    height: WIDTH - 80,
    transform: [{ rotate: '90deg' }],
  },
  text: {
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});