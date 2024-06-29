import React from 'react';
import { Linking, StyleSheet } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';

interface PropsType {
  name: string;
  licenses: string;
  repository: string;
}

export const OssCard: React.FC<PropsType> = props => {
  const { licenses, name, repository } = props;

  return (
    <Components.ButtonBase
      onPress={() => Linking.openURL(repository)}
      style={styles.container}>
      <Components.TypoGraphy style={styles.name}>{name}</Components.TypoGraphy>
      <Components.TypoGraphy style={styles.repository}>{repository}</Components.TypoGraphy>
      <Components.TypoGraphy style={styles.licenses}>{licenses}</Components.TypoGraphy>
    </Components.ButtonBase>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  name: {
    fontSize: 16,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  repository: {
    marginTop: 4,
    fontSize: 12,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  licenses: {
    marginTop: 2,
    fontSize: 12,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});