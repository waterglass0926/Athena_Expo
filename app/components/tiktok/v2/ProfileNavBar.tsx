import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function ProfileNavBar({
  user,
}) {
  return (
    user && (
      <View style={styles.container}>
        <TouchableOpacity>
          <Feather name='search' size={20} />
        </TouchableOpacity>
        <Text style={styles.text}>{user.email}</Text>
        <TouchableOpacity>
          <Feather name='menu' size={24} />
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    fontSize: 16,
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
