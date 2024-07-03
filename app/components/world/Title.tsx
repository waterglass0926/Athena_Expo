import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';

export const Title = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <Text style={[styles.textTitle, { color: theme.FORECOLOR }]}>{props.title}</Text>
      {props.seeAll && (
        <TouchableOpacity style={styles.ViewRight} onPress={props.onPress}>
          <Text style={[styles.textSeeAll, { color: theme.PRIMARY }]}>See All</Text>
          <Icon type='material' name='keyboard-arrow-right' size={15} color={theme.PRIMARY} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 15,
    width: '100%',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  ViewRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSeeAll: {
    fontSize: 12,
    fontWeight: '600',
  },
});