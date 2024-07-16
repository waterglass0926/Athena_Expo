import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

const logo = require('@/assets/images/disney/v2/logo.png');

export function NavBar({ setSearchable }) {
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={styles.container}>
      <View style={styles.subNavContainer1}>
        <FontAwesome name='navicon' size={30} style={{ color: theme.FORECOLOR }} />
        <Image source={logo} style={styles.image} alt='Value Not Found' />
      </View>
      <Pressable onPress={() => setSearchable(true)}>
        <FontAwesome name='search' size={30} style={{ color: theme.FORECOLOR }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 16
  },
  text: {
    color: 'white',
  },
  icon1: {
    color: 'white',
  },
  icon2: {
    color: 'white',
    marginRight: 20,
  },
  image: {
    height: 50,
    width: 100,
  },
  subNavContainer1: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});