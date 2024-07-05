import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

export interface GoogleLoginProps {
  color: string;
  next: () => void;
};

export const GoogleLogin = ({ color, next }: GoogleLoginProps) => {
  const { googleAccessGiven } = useSelector(state => state.user);
  const [isLoading, setisLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signIn = async () => {
    setisLoading(true);
  };

  useEffect(() => {
    if (googleAccessGiven) {
      setisLoading(false);
    };
    GoogleSignin.isSignedIn().then(authenticated => {
      setIsAuthenticated(authenticated);
    });
  }, [googleAccessGiven]);

  if (isAuthenticated) {
    return (
      <Button mode='contained' icon='done-all' color={color} onPress={next}>
        Done
      </Button>
    );
  };

  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
      disabled={isLoading}
    />
  );
};