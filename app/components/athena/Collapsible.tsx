import { PropsWithChildren, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-elements'

import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.buttonHeading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Icon type='ionicon'
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme.FORECOLOR}
        />
        <ThemedText type='defaultSemiBold'>{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.viewContent}>{children}</ThemedView>}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  buttonHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  viewContent: {
    marginTop: 6,
    marginLeft: 24,
  },
});
