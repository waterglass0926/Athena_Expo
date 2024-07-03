import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import ImageModal from 'react-native-image-modal';

import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  View,
  Text,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/athena';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';
import { ThemeType } from '@/types/athena';
import { signOut } from '@/stores/world/auth';

import { WorldBottomTab } from '@/routes/tabs/world/bottom';

const DrawerItem = (props) => {
  const { theme } = useSelector(state => state.athena);

  return (
    <TouchableOpacity
      style={{
        ...styles.viewItems,
        backgroundColor:
          props.active === props.title
            ? theme.PRIMARY
            : theme.BACKCOLOR,
      }}
      onPress={props.onPress}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          type={props.leftIconType}
          name={props.leftIconName}
          size={props.leftIconSize}
          color={props.active === props.title
            ? theme.QUATERNARY
            : theme.FORECOLOR
          }
        />
        <Text
          style={{
            ...styles.textItems,
            color: props.active === props.title
              ? theme.QUATERNARY
              : theme.FORECOLOR,
          }}>
          {props.title}
        </Text>
      </View>
      <Icon
        type={props.rightIconType}
        name={props.rightIconName}
        size={props.rightIconSize}
        color={theme.FORECOLOR}
      />
    </TouchableOpacity>
  );
};

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);
  const { user } = useSelector(state => state.worldAuth);

  const [active, setActive] = useState('Home');

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <ImageBackground
        source={Constants.IAMGES.WORLD.W001}
        style={styles.header}
        resizeMode='cover'
        blurRadius={5}
      >
        <ImageModal
          source={{
            uri: Functions.isEmpty(user.image.avatar)
              ? Constants.IAMGES.ATHENA.DEFAULT
              : user.image.avatar
          }}
          style={[styles.imageAvatar, { borderColor: theme.PRIMARY }]}
          resizeMode='cover'
          modalImageResizeMode='contain'
        />
        <Text
          style={[styles.textName, { color: theme.QUATERNARY }]}>
          {`${user?.name?.firstname} ${user?.name?.lastname}`}
        </Text>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.content}>
        <DrawerItem
          active={active}
          leftIconType='material-community'
          leftIconName='home-outline'
          leftIconSize={30}
          title='Home'
          onPress={() => setActive('Home')}
        />
        <DrawerItem
          active={active}
          leftIconType='material'
          leftIconName='notifications-none'
          leftIconSize={30}
          title='Notifications'
          onPress={() => setActive('Notifications')}
        />
        <DrawerItem
          active={active}
          leftIconType='material-community'
          leftIconName='message-outline'
          leftIconSize={30}
          title='Messages'
          onPress={() => setActive('Messages')}
        />
        <DrawerItem
          active={active}
          leftIconType='material-community'
          leftIconName='account-outline'
          leftIconSize={30}
          title='Profile'
          onPress={() => setActive('Profile')}
        />
        <DrawerItem
          active={active}
          leftIconType='feather'
          leftIconName='settings'
          leftIconSize={30}
          title='Settings'
          onPress={() => setActive('Settings')}
        />
        <DrawerItem
          active={active}
          leftIconType='material-community'
          leftIconName='help-circle-outline'
          leftIconSize={30}
          title='Help'
          onPress={() => setActive('Help')}
        />
        <View style={[styles.viewLine, { marginTop: 200, backgroundColor: theme.FORECOLOR }]} />

        <DrawerItem
          active={active}
          leftIconType='material-community'
          leftIconName='logout'
          leftIconSize={30}
          title='Logout'
          onPress={() => {
            setActive('Logout');
            dispatch(signOut({}));
          }}
        />
      </ScrollView>
    </View>
  );
};

const DrawerWorldMain = createDrawerNavigator();
export const WorldMainDrawer = () => {
  return (
    <DrawerWorldMain.Navigator
      initialRouteName='WorldBottomTab'
      useLegacyImplementation={false}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ drawerStyle: { width: wp('80%') } }}>
      <DrawerWorldMain.Screen
        name='WorldBottomTab'
        component={WorldBottomTab}
        options={navOptionHandler}
      />
    </DrawerWorldMain.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  header: {
    justifyContent: 'center',
    width: '100%',
    height: 230,
  },
  viewAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  imageAvatar: {
    marginLeft: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
  },
  textName: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '800',
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  viewItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textItems: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: '600',
  },
  viewLine: {
    marginVertical: 10,
    width: '100%',
    height: 1,
  },
});