import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ImageModal from 'react-native-image-modal';

import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';

export const UserData = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <ScrollView
      key='scroll00'
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.data.content}>
        {(props.data || []).map((item, index) => {
          var one = (item.data || [])[0];
          return (
            <View style={styles.data.item} key={`data_${index}`}>
              <ImageModal
                source={{
                  uri: Functions.isEmpty(one?.url)
                    ? Constants.IMAGES.ATHENA.preventDefault()
                    : one?.url
                }}
                style={[styles.data.one, { borderColor: theme.PRIMARY, marginLeft: index % 3 === 0 ? 0 : 1, marginRight: index % 3 === 2 ? 0 : 1 }]}
                resizeMode='cover'
                modalImageResizeMode='contain'
              />
              {/* <FastImage style={[styles.data.one, { marginLeft: index % 3 === 0 ? 0 : 1, marginRight: index % 3 === 2 ? 0 : 1 }]} source={{ uri: one.url }} resizeMode='cover' /> */}
            </View>
          )
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%')
  },

  data: {
    content: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    item: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      width: (wp('100%') / 3) - 2,
      height: wp('100%') / 3,
      marginHorizontal: 1,
      marginVertical: 1,
    },
    one: {
      width: (wp('100%') / 3) - 2,
      height: '100%'
    }
  }
});