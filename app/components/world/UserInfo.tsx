import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';

import { Button } from './Button';
import { Rating } from './Rating';
import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';

export const UserInfo = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    props.type === 'normal' ? (
      <View style={styles.type1_container}>
        <View style={styles.type1_content}>
          {/* <ImageModal
            source={{ uri: props.user?.image?.avatar }}
            style={[styles.avatar, { borderColor: theme.PRIMARY }]}
            resizeMode='cover'
            modalImageResizeMode='contain'
          /> */}
          <Image
            source={{
              uri: Functions.isEmpty(props.user?.image?.avatar)
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.user?.image?.avatar
            }}
            style={[styles.type1_avatar, { borderColor: theme.PRIMARY }]}
            resizeMode='cover'
            blurRadius={20}
          />
          <View style={styles.info1_content}>
            <Text style={[styles.info1_name, { color: theme.FORECOLOR }]}>{`${props.user?.name?.firstname} ${props.user?.name?.lastname}`}</Text>
            <Text style={[styles.info1_title, { color: theme.PRIMARY }]}>{`${props.user?.info?.title}`}</Text>
            <Text style={[styles.info1_detail, { color: theme.FORECOLOR }]}>{`${Functions.isShort(props.user?.info?.detail, 100)}`}</Text>
          </View>
        </View>
        <View style={[styles.status1_content, { backgroundColor: theme.SECONDARY, borderColor: theme.PRIMARY }]}>
          <TouchableOpacity style={styles.status1_button} onPress={props.onPosts}>
            <Text style={[styles.status1_count, { color: theme.FORECOLOR }]}>539</Text>
            <Text style={[styles.status1_text, { color: theme.PRIMARY }]}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.status1_button} onPress={props.onFollowers}>
            <Text style={[styles.status1_count, { color: theme.FORECOLOR }]}>590</Text>
            <Text style={[styles.status1_text, { color: theme.PRIMARY }]}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.status1_button} onPress={props.onFollowing}>
            <Text style={[styles.status1_count, { color: theme.FORECOLOR }]}>6K</Text>
            <Text style={[styles.status1_text, { color: theme.PRIMARY }]}>Following</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons1_content}>
          <Button
            title={'Edit Profile'}
            width={wp('45%')}
            height={35}
            fontSize={15}
            borderRadius={5}
            foreColor={Constants.COLORS.DEFAULT.WHITE}
            onPress={props.onEdit}
          />
          <Button
            title={'More Options'}
            outline
            width={wp('45%')}
            height={35}
            fontSize={15}
            foreColor={theme.PRIMARY}
            borderRadius={5}
            onPress={props.onMore}
          />
        </View>
      </View>
    ) : (
      <View style={styles.type2_container}>
        <View style={styles.type2_content}>
          <Image
            source={{
              uri: Functions.isEmpty(props.user?.image?.cover)
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.user?.image?.cover
            }}
            style={styles.type2_cover}
            resizeMode='cover'
          />
          <Image
            source={{
              uri: Functions.isEmpty(props.user?.image?.avatar)
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.user?.image?.avatar
            }}
            style={[styles.type2_avatar, { borderColor: theme.PRIMARY }]}
            resizeMode='cover'
            blurRadius={20}
          />
        </View>
        <View style={styles.info2_content}>
          <View>
            <Text style={[styles.info2_name, { color: theme.FORECOLOR }]}>{`${props.user?.name?.firstname} ${props.user?.name?.lastname}`}</Text>
            <Text style={[styles.info2_title, { color: theme.PRIMARY }]}>{`${Functions.isShort(props.user?.info?.title.toUpperCase(), 30)}`}</Text>
            <View style={styles.location2_content}>
              <Icon type='material-community' name='map-marker-radius-outline' size={20} color={theme.FORECOLOR} />
              <Text style={[styles.location2_text, { color: theme.FORECOLOR }]}>{`${props.user.location.city}, ${props.user?.location?.state}`}</Text>
            </View>
            <View style={styles.rating2_content}>
              <Rating
                rating={5}
                size={15}
                color={Colors.yellow}
              />
              <TouchableOpacity>
                <Text style={[styles.rating2_text, { color: theme.FORECOLOR }]}>50 Reviews</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttons2_content}>
            <Button
              title={'Edit Profile'}
              width={120}
              height={25}
              fontSize={12}
              borderRadius={5}
              onPress={props.onEdit}
            />
            <Button
              title={'More Options'}
              outline
              marginTop={5}
              width={120}
              height={25}
              fontSize={12}
              foreColor={theme.PRIMARY}
              borderRadius={5}
              onPress={props.onMore}
            />
          </View>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  type1_container: {
    padding: 15
  },
  type1_content: {
    flexDirection: 'row',
  },
  type1_avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2
  },
  info1_content: {
    marginLeft: 10,
    padding: 10
  },
  info1_name: {
    fontSize: 15,
    fontWeight: '600'
  },
  info1_username: {
    marginTop: 1,
    fontSize: 12,
    fontWeight: '500'
  },
  info1_title: {
    fontSize: 10,
    fontWeight: '600',
  },
  info1_detail: {
    marginTop: 5,
    width: wp('100%') - 150,
    fontSize: 10,
    fontWeight: '500',
    opacity: 0.5
  },
  status1_content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItem: 'center',
    marginTop: 15,
    // opacity: 0.5,
    borderRadius: 5,
    borderWidth: 0.5
  },
  status1_button: {
    justifyContent: 'center',
    alignItem: 'center',
    padding: 10
  },
  status1_count: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500'
  },
  status1_text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500'
  },
  buttons1_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    marginTop: 10,
    width: '100%',
  },
  type2_container: {
    marginBottom: 15,
  },
  type2_content: {
    width: wp('100%'),
    alignItems: 'center'
  },
  type2_cover: {
    marginTop: -10,
    width: '100%',
    height: 100
  },
  type2_avatar: {
    marginTop: -60,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2
  },
  info2_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    width: wp('100%')
  },
  info2_name: {
    fontSize: 20,
    fontWeight: '600'
  },
  info2_title: {
    fontSize: 10,
    fontWeight: '600',
  },
  location2_content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  location2_text: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '500'
  },
  rating2_content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating2_text: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '500',
    textDecorationLine: 'underline'
  },
  info2_detail: {
    marginTop: 5,
    width: wp('45%'),
    fontSize: 10,
    fontWeight: '500',
    opacity: 0.8
  },
  buttons2_content: {
    flexDirection: 'column'
  },
});