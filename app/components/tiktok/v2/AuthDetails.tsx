import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { login, register } from '@/stores/tiktok/v2/auth';

export interface AuthDetailsProps {
  authPage: 0 | 1;
  setAuthPage: Dispatch<SetStateAction<0 | 1>>;
  setMenuMessage: Dispatch<SetStateAction<string>>;
  setDetailsPage: Dispatch<SetStateAction<boolean>>;
}

/**
 * Function that renders a component that renders a signin/signup
 * form.
 *
 * @param props passed to component
 * @param props.authPage if 0 it is in the signin state
 * if 1 is in the signup state
 * @param props.setDetailsPage setter for the variable that chooses
 * the type of page, if true show AuthMenu else show AuthDetails
 * @returns Component
 */
export function AuthDetails({
  authPage,
  setAuthPage,
  setMenuMessage,
  setDetailsPage,
}: AuthDetailsProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => console.log('login successful'))
      .catch(() => console.log('login unsuccessful'));
  };

  const handleRegister = () => {
    dispatch(register({ email, password }))
      .unwrap()
      .then(() => {
        console.log('register successful');
        setDetailsPage(false);
        setAuthPage(1);
        setMenuMessage('Creating account...');
      })
      .catch(() => console.log('register unsuccessful'));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather name='arrow-left' size={24} color='black' />
      </TouchableOpacity>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.textInput}
        placeholder='Email'
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput}
        secureTextEntry
        placeholder='Password'
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => (authPage == 0 ? handleLogin() : handleRegister())}
      >
        <Text style={styles.buttonText}>
          {authPage == 0 ? 'Sign In' : 'Sign Up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  textInput: {
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    marginTop: 80,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
