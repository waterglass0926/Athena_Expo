import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import Carousel from 'react-native-reanimated-carousel';
import ImageModal from 'react-native-image-modal';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Post = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR, borderColor: theme.FORECOLOR }]}>
      <View style={styles.user.content}>
        <TouchableOpacity style={styles.user.left} onPress={props.onUser}>
          <Image
            source={{
              uri: Functions.isEmpty(props.post?.user?.image?.avatar)
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.post?.user?.image?.avatar
            }}
            style={[styles.user.avatar, { borderColor: theme.PRIMARY }]}
            blurRadius={10} />
          <Text style={[styles.user.text, { color: theme.FORECOLOR }]}>{props.post?.user?.name?.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.user.dot}>
          <Icon type='material-community' name='dots-vertical' size={20} color={theme.FORECOLOR} />
        </TouchableOpacity>
      </View>
      <Carousel
        data={props.post?.data}
        width={wp('100%')}
        height={300}
        renderItem={({ item, index }) => (
          <ImageModal
            key={`post_data_${index}`}
            source={{
              uri: Functions.isEmpty(item?.url)
                ? Constants.IAMGES.ATHENA.DEFAULT
                : item?.url
            }}
            style={styles.image}
            resizeMode='cover'
            modalImageResizeMode='contain'
            overlayBackgroundColor='#000000E0'
          />
        )}
      />
      <View style={styles.actions.content}>
        <View style={styles.user.left}>
          <TouchableOpacity style={styles.actions.icon} onPress={props.onLike}>
            <Icon type='material-community' name='cards-heart-outline' size={23} color={theme.FORECOLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actions.icon} onPress={props.onComment}>
            <Icon type='material-community' name='comment-outline' size={20} color={theme.FORECOLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actions.icon} onPress={props.onShare}>
            <Icon type='material-community' name='share-variant-outline' size={20} color={theme.FORECOLOR} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.actions.icon} onPress={props.onBookmark}>
          <Icon type='material-community' name='bookmark-outline' size={25} color={theme.FORECOLOR} />
        </TouchableOpacity>
      </View>
      <View style={styles.info.content}>
        <TouchableOpacity onPress={props.onTitle}>
          <Text style={[styles.info.title, { color: theme.FORECOLOR }]}>{props.post?.title}</Text>
        </TouchableOpacity>
        <Text style={[styles.info.description, { color: theme.FORECOLOR }]}>{Functions.isShort(props.post?.description, 200)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: wp('100%'),
    borderWidth: 1,
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  user: {
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp('100%'),
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    left: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
    },
    text: {
      marginLeft: 10,
      fontSize: 12,
      fontWeight: '500'
    },
    dot: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
    }
  },
  image: {
    width: wp('100%') - 2,
    height: 300,
  },
  actions: {
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp('100%'),
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    left: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
    }
  },
  info: {
    content: {
      width: wp('100%'),
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    title: {
      fontSize: 15,
      fontWeight: '600'
    },
    description: {
      marginTop: 5,
      fontSize: 12,
      fontWeight: '500'
    }
  }
});