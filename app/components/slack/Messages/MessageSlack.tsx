import React from 'react';
import { MessageSimple } from 'stream-chat-react-native';

import ReactNativeHaptic from 'react-native-haptic';

import { MessageFooter } from './MessageFooter';
import { MessageText } from './MessageText';
import { MessageAvatar } from './MessageAvatar';
import { MessageHeader } from './MessageHeader';
import { MessageActionSheet } from './MessageActionSheet';

import { UrlPreview } from '../Other/UrlPreview';
import { Giphy } from '../Other/Giphy';

import { getSupportedReactions } from '@/utils/slack/supportedReactions';

export const MessageSlack = props => {
  if (props.message.deleted_at) {
    return null;
  }
  return (
    <MessageSimple
      {...props}
      forceAlign='left'
      ReactionList={null}
      onLongPress={() => {
        ReactNativeHaptic && ReactNativeHaptic.generate('impact');
        props.showActionSheet();
      }}
      textBeforeAttachments
      ActionSheet={MessageActionSheet}
      MessageAvatar={MessageAvatar}
      MessageHeader={MessageHeader}
      MessageFooter={MessageFooter}
      MessageText={MessageText}
      UrlPreview={UrlPreview}
      Giphy={Giphy}
      supportedReactions={getSupportedReactions(false)}
    />
  );
};
