import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface NavBarGeneralProps {
  title?: string;
  leftButton?: {
    display: boolean;
    name?: keyof typeof Feather.glyphMap;
  };
  rightButton?: {
    display: boolean;
    name?: keyof typeof Feather.glyphMap;
    action?: () => void;
  };
};

export function NavBarGeneral({
  title = 'NavBarGeneral',
  leftButton = { display: true },
  rightButton = { display: false },
}: NavBarGeneralProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (leftButton.display ? navigation.goBack() : null)}
      >
        {leftButton.display && <Feather name='arrow-left' size={26} />}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          rightButton.display && rightButton.action
            ? rightButton.action()
            : null
        }
      >
        {rightButton.display && (
          <Feather name={rightButton.name} size={26} color={'pink'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
