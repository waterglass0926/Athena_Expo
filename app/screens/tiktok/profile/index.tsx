import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import { ScrollView } from 'react-native';

import '@/utils/i18n';
import Components from '@/components/tiktok';
import Constants from '@/constants';
import Functions from '@/utils';
import Styles from '@/styles/tiktok';
import { ThemeType } from '@/types/athena';

type PropsType = {
  navigation: any;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Profile: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <Styles.ProfileContainer>
      <Styles.ProfileHeader>
        <Icon
          type='ant-design'
          name='adduser'
          size={24}
          color={Constants.COLORS.DEFAULT.BLACK}
          style={{ position: 'absolute', left: 10, top: 10 }}
        />
        <Styles.ProfileTitle>Matheus Castro</Styles.ProfileTitle>
        <Icon
          type='material'
          name='arrow-drop-down'
          size={24}
          color={Constants.COLORS.DEFAULT.BLACK}
        />
        <Icon
          type='font-awesome'
          name='ellipsis-v'
          size={24}
          color={Constants.COLORS.DEFAULT.BLACK}
          style={{ position: 'absolute', right: 13, top: 12 }}
        />
      </Styles.ProfileHeader>
      <ScrollView>
        <Styles.ProfileContent>
          <Styles.ProfileAvatar source={Constants.IAMGES.ATHENA.SPLASH106} />
          <Styles.ProfileUsername>@starmastar1126</Styles.ProfileUsername>
          <Styles.ProfileStats>
            <Styles.ProfileStatsColumn>
              <Styles.ProfileStatsNumber>1950</Styles.ProfileStatsNumber>
              <Styles.ProfileStatsText>Following</Styles.ProfileStatsText>
            </Styles.ProfileStatsColumn>
            <Styles.ProfileSeparator>|</Styles.ProfileSeparator>
            <Styles.ProfileStatsColumn>
              <Styles.ProfileStatsNumber>650</Styles.ProfileStatsNumber>
              <Styles.ProfileStatsText>Followers</Styles.ProfileStatsText>
            </Styles.ProfileStatsColumn>
            <Styles.ProfileSeparator>|</Styles.ProfileSeparator>
            <Styles.ProfileStatsColumn>
              <Styles.ProfileStatsNumber>950</Styles.ProfileStatsNumber>
              <Styles.ProfileStatsText>Likes</Styles.ProfileStatsText>
            </Styles.ProfileStatsColumn>
          </Styles.ProfileStats>
          <Styles.ProfileColumn>
            <Styles.ProfileEdit>
              <Styles.ProfileText>Edit profile</Styles.ProfileText>
            </Styles.ProfileEdit>
            <Styles.ProfileBookmark name='bookmark' size={24} color='black' />
          </Styles.ProfileColumn>

          <Styles.ProfileStatsText>Tap to add bio</Styles.ProfileStatsText>
        </Styles.ProfileContent>
      </ScrollView>
    </Styles.ProfileContainer>
  );
};