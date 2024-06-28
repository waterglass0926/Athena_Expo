import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useSignIn, useSignUp } from '@clerk/clerk-expo';
import { useLocalSearchParams } from 'expo-router';

import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/chatgpt/version2.0';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Login = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const { type } = useLocalSearchParams<{ type: string }>();
  const { signIn, setActive, isLoaded } = useSignIn();
  const { signUp, isLoaded: signUpLoaded, setActive: signupSetActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    };

    setLoading(true);

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      Alert.alert(err.errors[0].message);
    } finally {
      setLoading(false);
    };
  };

  const onSignUpPress = async () => {
    if (!signUpLoaded) {
      return;
    }

    setLoading(true);

    try {
      // Create the user on Clerk
      const result = await signUp.create({
        emailAddress,
        password,
      });

      // This indicates the user is signed in
      signupSetActive({ session: result.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    };
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}
      style={styles.container}>
      {loading && (
        <View style={Constants.STYLES.CHATGPT.V2.loading}>
          <ActivityIndicator size='large' color={Constants.COLORS.DEFAULT.WHITE} />
        </View>
      )}

      <Image source={Constants.IAMGES.CHATGPT.V2.LOGO_DARK} style={styles.imageLogo} />

      <Text style={styles.title}>{type === 'login' ? 'Welcome back' : 'Create your account'}</Text>
      <View style={{ marginBottom: 30 }}>
        <TextInput
          autoCapitalize='none'
          placeholder='john@apple.com'
          value={emailAddress}
          onChangeText={setEmailAddress}
          style={styles.inputField}
        />
        <TextInput
          placeholder='password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputField}
        />
      </View>

      {type === 'login' ? (
        <TouchableOpacity style={[Constants.STYLES.CHATGPT.V2.button, styles.buttonLogin]} onPress={onSignInPress}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[Constants.STYLES.CHATGPT.V2.button, styles.buttonLogin]} onPress={onSignUpPress}>
          <Text style={styles.textLogin}>Create account</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageLogo: {
    alignSelf: 'center',
    marginVertical: 80,
    width: 60,
    height: 60,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputField: {
    marginVertical: 4,
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderColor: Constants.COLORS.CHATGPT.V2.PRIMARY,
    borderRadius: 12,
    backgroundColor: Constants.COLORS.DEFAULT.WHITE,
  },
  buttonLogin: {
    marginVertical: 4,
    backgroundColor: Constants.COLORS.CHATGPT.V2.PRIMARY,
  },
  btnPrimaryText: {
    fontSize: 16,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});