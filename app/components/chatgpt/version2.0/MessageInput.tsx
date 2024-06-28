import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Icon } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BlurView } from 'expo-blur';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

import { View, StyleSheet } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

const ATouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

type PropsType = {
  onShouldSend: (message: string) => void;
};

export const MessageInput = ({ onShouldSend }: PropsType) => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const [message, setMessage] = useState('');
  const { bottom } = useSafeAreaInsets();
  const expanded = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);

  const expandItems = () => {
    expanded.value = withTiming(1, { duration: 400 });
  };

  const collapseItems = () => {
    expanded.value = withTiming(0, { duration: 400 });
  };

  const expandButtonStyle = useAnimatedStyle(() => {
    const opacityInterpolation = interpolate(expanded.value, [0, 1], [1, 0], Extrapolation.CLAMP);
    const widthInterpolation = interpolate(expanded.value, [0, 1], [30, 0], Extrapolation.CLAMP);

    return {
      opacity: opacityInterpolation,
      width: widthInterpolation,
    };
  });

  const buttonViewStyle = useAnimatedStyle(() => {
    const widthInterpolation = interpolate(expanded.value, [0, 1], [0, 100], Extrapolation.CLAMP);

    return {
      width: widthInterpolation,
      opacity: expanded.value,
    };
  });

  const onChangeText = (text: string) => {
    collapseItems();
    setMessage(text);
  };

  const onSend = () => {
    onShouldSend(message);
    setMessage('');
  };

  const onSelectCard = (text: string) => {
    onShouldSend(text);
  };

  return (
    <BlurView intensity={90} tint='extraLight' style={{ paddingBottom: bottom, paddingTop: 10 }}>
      <View style={styles.row}>
        <ATouchableOpacity onPress={expandItems} style={[styles.buttonRound, expandButtonStyle]}>
          <Icon type='ionicon' name='add' size={24} color={Constants.COLORS.CHATGPT.V2.GREY} />
        </ATouchableOpacity>

        <Animated.View style={[styles.viewButton, buttonViewStyle]}>
          <TouchableOpacity onPress={() => ImagePicker.launchCameraAsync()}>
            <Icon type='ionicon' name='camera-outline' size={24} color={Constants.COLORS.CHATGPT.V2.GREY} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ImagePicker.launchImageLibraryAsync()}>
            <Icon type='ionicon' name='image-outline' size={24} color={Constants.COLORS.CHATGPT.V2.GREY} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => DocumentPicker.getDocumentAsync()}>
            <Icon type='ionicon' name='folder-outline' size={24} color={Constants.COLORS.CHATGPT.V2.GREY} />
          </TouchableOpacity>
        </Animated.View>

        <TextInput
          autoFocus
          ref={inputRef}
          placeholder='Message'
          style={styles.messageInput}
          onFocus={collapseItems}
          onChangeText={onChangeText}
          value={message}
          multiline
        />
        {message.length > 0 ? (
          <TouchableOpacity onPress={onSend}>
            <Icon type='ionicon' name='arrow-up-circle' size={24} color={Constants.COLORS.CHATGPT.V2.GREY} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Icon type='font-awesome-5' name='headphones' size={24} color={Constants.COLORS.CHATGPT.V2.GREY} />
          </TouchableOpacity>
        )}
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  messageInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Constants.COLORS.CHATGPT.V2.GRAY,
    borderRadius: 20,
    backgroundColor: Constants.COLORS.CHATGPT.V2.LIGHT,
  },
  buttonRound: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: Constants.COLORS.CHATGPT.V2.INPUT,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});