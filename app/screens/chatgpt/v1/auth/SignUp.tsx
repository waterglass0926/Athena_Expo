import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, child, set, getDatabase } from 'firebase/database';

import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/chatgpt/v1';
import Constants from '@/constants';
import Functions from '@/utils';
import { auth } from '@/utils/firebase';
import { ThemeType } from '@/types/athena';

type PropsType = {
  navigation: any;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const SignUp: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { theme } = useSelector((state: StateType) => state.athena);

  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [error, setError] = useState(null);

  // handle errors
  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred', error);
    }
  }, [error]);

  const createUser = async (fullname, email, userId) => {
    const userData = {
      fullName: fullname,
      email,
      userId,
      signUpDate: new Date().toISOString(),
    };

    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${userId}`);
    await set(childRef, userData);

    return userData;
  };

  const authHandler = async () => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const { uid } = result.user;

      const userData = await createUser(
        fullname,
        email,
        uid,
      );

      if (userData) navigation.navigate('ChatGptSignIn');
    } catch (error) {
      const errorCode = error.code;
      let message = 'Something went wrong !';

      if (errorCode === 'auth/email-already-in-use') {
        message = 'This email is already in use';
      };

      setError(message);
    } finally {
      setLoading(false);
    };
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.BACKCOLOR }}>
      <Components.Page>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 22,
          }}
        >
          <Image
            source={Constants.IAMGES.CHATGPT.V1.LOGO}
            style={{
              marginBottom: 20,
              height: 120,
              width: 120,
            }}
          />

          <Text
            style={{
              ...Constants.STYLES.CHATGPT.V1.h4,
              marginBottom: 64,
              color: theme.FORECOLOR,
            }}
          >
            Welcome Back!
          </Text>

          <Components.Input
            id='fullname'
            placeholder='Enter your fullname'
            placeholderTextColor={theme.TERTIARY}
            value={fullname}
            errorText={''}
            onChangeText={(value) => setFullname(value)}
          />

          <Components.Input
            id='email'
            placeholder='Enter your email'
            placeholderTextColor={theme.TERTIARY}
            value={email}
            errorText={errorEmail}
            onChangeText={(value) => setEmail(value)}
          />

          <Components.Input
            id='password'
            placeholder='Enter your password'
            placeholderTextColor={theme.TERTIARY}
            secureTextEntry
            errorText={errorPassword}
            onChangeText={(value) => setPassword(value)}
          />

          <Components.Button
            title='SignUp'
            filled
            isLoading={loading}
            onPress={authHandler}
            style={{
              width: wp('100%') - 44,
              marginBottom: Constants.SIZE.S08,
              marginVertical: Constants.SIZE.S08,
            }}
          />
        </View>
      </Components.Page>
    </SafeAreaView>
  );
};