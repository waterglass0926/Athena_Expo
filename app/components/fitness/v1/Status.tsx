import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Status = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={[styles.container, { backgroundColor: theme.SECONDARY, borderColor: theme.PRIMARY }]}>
      <View style={styles.viewTop}>
        <Text style={[styles.textDaily, { color: theme.FORECOLOR }]}>Daily Activities</Text>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={[styles.textSee, { color: Constants.COLORS.DEFAULT.GREEN }]}>See Status</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewMain}>
        <View style={styles.viewStatus}>
          <Icon type='material-community' name='fire' size={40} color={Constants.COLORS.DEFAULT.ORANGE} />
          <Text style={[styles.textKcal, { color: theme.FORECOLOR }]}>480 kcals</Text>
          <Text style={[styles.textCalorie, { color: theme.TERTIARY }]}>Calorie</Text>
        </View>
        <View style={styles.viewStatus}>
          <Icon type='material' name='fitness-center' size={40} color={Constants.COLORS.DEFAULT.MAGENTA} />
          <Text style={[styles.textKcal, { color: theme.FORECOLOR }]}>8 workouts</Text>
          <Text style={[styles.textCalorie, { color: theme.TERTIARY }]}>Trainings</Text>
        </View>
        <View style={styles.viewStatus}>
          <Icon type='material-community' name='clock-outline' size={40} color={Constants.COLORS.DEFAULT.YELLOW} />
          <Text style={[styles.textKcal, { color: theme.FORECOLOR }]}>20 mins</Text>
          <Text style={[styles.textCalorie, { color: theme.TERTIARY }]}>Durations</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderRadius: 4,
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textDaily: {
    fontSize: 14,
    fontWeight: '700',
  },
  textSee: {
    fontSize: 12,
    fontWeight: '500',
  },
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
  },
  viewStatus: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textKcal: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '700',
  },
  textCalorie: {
    fontSize: 11,
    fontWeight: '600',
  },
});