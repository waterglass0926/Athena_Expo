import React from 'react';
import { useDispatch } from 'react-redux';
import { Player, useAppSelector } from '@serenity/core';

import { View } from 'react-native';

import { RepeatIcon } from '../Normal/RepeatIcon';

export const RepeatContainer = () => {
  const { repeat } = useAppSelector((state) => state.player);
  const dispatch = useDispatch();

  const updateRepeatType = () => {
    if (repeat === 'repeat-all') {
      dispatch(Player.repeatSongs('repeat-one'));
    } else if (repeat === 'repeat-one') {
      dispatch(Player.repeatSongs('repeat-off'));
    } else {
      dispatch(Player.repeatSongs('repeat-all'));
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <RepeatIcon repeat={repeat} updateRepeatType={updateRepeatType} />
    </View>
  );
};