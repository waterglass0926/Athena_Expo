import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Link } from 'expo-router';
import * as ContextMenu from 'zeego/context-menu';

import { View, Text, StyleSheet, Image, ActivityIndicator, Pressable } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';
import { copyImageToClipboard, downloadAndSaveImage, shareImage } from '@/utils/images';
import { ThemeType } from '@/types/athena';
import { Message, Role } from '@/types/chatgpt/version2.0';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const ChatMessage = ({
  content,
  role,
  imageUrl,
  prompt,
  loading,
}: Message & { loading?: boolean }) => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const contextItems = [
    { title: 'Copy', systemIcon: 'doc.on.doc', action: () => copyImageToClipboard(imageUrl!) },
    {
      title: 'Save to Photos',
      systemIcon: 'arrow.down.to.line',
      action: () => downloadAndSaveImage(imageUrl!),
    },
    { title: 'Share', systemIcon: 'square.and.arrow.up', action: () => shareImage(imageUrl!) },
  ];

  return (
    <View style={styles.row}>
      {role === Role.Bot ? (
        <View style={[styles.item, { backgroundColor: Constants.COLORS.DEFAULT.BLACK }]}>
          <Image source={Constants.IAMGES.CHATGPT.V2.LOGO_WHITE} style={styles.imageLogo} />
        </View>
      ) : (
        <Image source={{ uri: 'https://galaxies.dev/img/meerkat_2.jpg' }} style={styles.imageAvatar} />
      )}

      {loading ? (
        <View style={styles.viewLoading}>
          <ActivityIndicator color={theme.PRIMARY} size='small' />
        </View>
      ) : (
        <>
          {content === '' && imageUrl ? (
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <Link
                  href={`/screens/chatgpt/version2.0/main/image/${encodeURIComponent(
                    imageUrl
                  )}?prompt=${encodeURIComponent(prompt!)}`}
                  asChild>
                  <Pressable>
                    <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
                  </Pressable>
                </Link>
              </ContextMenu.Trigger>
              <ContextMenu.Content>
                {contextItems.map((item, index) => (
                  <ContextMenu.Item key={item.title} onSelect={item.action}>
                    <ContextMenu.ItemTitle>{item.title}</ContextMenu.ItemTitle>
                    <ContextMenu.ItemIcon
                      ios={{
                        name: item.systemIcon,
                        pointSize: 18,
                      }}
                    />
                  </ContextMenu.Item>
                ))}
              </ContextMenu.Content>
            </ContextMenu.Root>
          ) : (
            <Text style={styles.text}>{content}</Text>
          )}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 12,
    paddingHorizontal: 14,
    gap: 14,
  },
  item: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageLogo: {
    margin: 6,
    width: 16,
    height: 16,
  },
  imageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Constants.COLORS.DEFAULT.BLACK,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    padding: 4,
    fontSize: 16,
  },
  imagePreview: {
    width: 240,
    height: 240,
    borderRadius: 10,
  },
  viewLoading: {
    justifyContent: 'center',
    marginLeft: 14,
    height: 26,
  },
});