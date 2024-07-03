// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import {
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   View,
// } from 'react-native';

// import '@/utils/i18n';
// import Components from '@/components/world';
// import Constants from '@/constants';
// import Functions from '@/utils';
// import { getFriends, getPosts } from '@/stores/world/main';

// export const Feed = (props) => {
//   const dispatch = useDispatch();
//   const { load, theme } = useSelector(state => state.athena);
//   const { friends, posts } = useSelector(state => state.worldMain);

//   useEffect(() => {
//     dispatch(getFriends({}));
//     dispatch(getPosts({}));
//   }, []);

//   return (
//     <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
//       <StatusBar hidden />

//       <Components.Header
//         menu
//         mode
//         title='FEED'
//         onTitle={() => props.navigation.popToTop()}
//         onMenu={() => props.navigation.openDrawer()}
//       />
//       <ScrollView
//         key='scroll00'
//         contentContainerStyle={styles.content}
//         showsVerticalScrollIndicator={false}
//       >
//         <Components.Friends
//           data={friends}
//         />
//         {posts.map((item, index) => (
//           <Components.Post
//             key={`post_${index}`}
//             post={item}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     width: wp('100%'),
//     paddingVertical: 16
//   },
// });