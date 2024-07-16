import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const logo = require('@/assets/images/disney/v2/logo.png');

export function Footer() {
  const { theme } = useSelector((state) => state.athena);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <FontAwesome name='home' size={30} style={{ color: theme.FORECOLOR }} />
        <Text style={{ color: theme.FORECOLOR }}>Home</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <FontAwesome name='tv' size={30} style={{ color: theme.FORECOLOR }} />
        <Text style={{ color: theme.FORECOLOR }}>Smart TV</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <MaterialIcons name='sports-esports' size={30} style={{ color: theme.FORECOLOR }} />
        <Text style={{ color: theme.FORECOLOR }}>Sports</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    padding: 15
  },
  text: {
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  image: {
    height: 50,
    width: 100,
  },
});