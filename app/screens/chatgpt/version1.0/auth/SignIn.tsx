import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signInWithEmailAndPassword } from 'firebase/auth';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/chatgpt/version1.0';
import Constants from '@/constants';
import Functions, { getFirebaseAuth } from '@/utils';
import { setLoad } from '@/stores/athena';
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

export const SignIn: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const [loading, setLoading] = useState(false);
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

  const loginHandler = async () => {
    const auth = getFirebaseAuth();
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (result) navigation.navigate('ChatGptBottomTab');
    } catch (error) {
      const errorCode = error.code;
      let message = 'Something went wrong';

      if (
        errorCode === 'auth/wrong-password' ||
        errorCode === 'auth/user-not-found'
      ) {
        message = 'Wrong email or password';
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
            Login to your account
          </Text>

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
            title='SignIn'
            filled
            isLoading={loading}
            onPress={loginHandler}
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

const styles = StyleSheet.create({

});