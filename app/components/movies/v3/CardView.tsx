import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';

const common = (item) => <View style={styles.card} key={item.itemid}>
  <ImageBackground
    style={{ width: '100%', height: '100%', }}
    imageStyle={{ resizeMode: 'cover', backgroundColor: 'black', opacity: 0.7, borderRadius: 5 }}
    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
  >
    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 5 }}>
      <Text style={{ textAlign: 'center', color: 'white', fontWeight: '900', fontSize: item.fontSize }}>{item.title}</Text>
    </View>
  </ImageBackground>
</View>

export const CardView = (props) => {

  if (props.details) {
    return (<View>{common(props)}</View>);
  }
  else {
    return (
      <TouchableOpacity activeOpacity={0} onPress={() => props.customprops.navigation.navigate(
        'MoviesV3Details', {
        item: props.item
      }
      )}>
        {common(props)}
      </TouchableOpacity>)
  };
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 150,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'black',
    color: 'black',
    borderRadius: 10
  }
});