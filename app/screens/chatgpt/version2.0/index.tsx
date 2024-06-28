import { View, StyleSheet } from 'react-native';

import '@/utils/i18n';
import Components from '@/components/chatgpt/version2.0';
import Constants from '@/constants';
import Functions from '@/utils';

export const Page = () => {
  return (
    <View style={styles.container}>
      <Components.AnimatedIntro />
      <Components.BottomLoginSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});