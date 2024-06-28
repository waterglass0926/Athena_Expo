import React, { useState } from 'react';
import { useFormikContext } from 'formik';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import { AppErrorMessage } from './AppErrorMessage';
import Constants from '@/constants';
import Functions from '@/utils';

export const AppFormFeilds = ({ name, password = false, ...otherProps }) => {
  const [showPassword, setShowPassword] = useState(password);
  const { setFieldTouched, handleChange, errors, touched, values } = useFormikContext();

  return (
    <View style={styles.container}>
      <TextInput
        {...otherProps}
        style={[styles.input, (touched[name] && errors[name]) && { borderColor: Constants.COLORS.UBEREATS.denger }]}
        secureTextEntry={showPassword}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      {password && (
        <TouchableOpacity style={styles.icon} onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Icon type='ant-design' name='eye' size={24} color={Constants.COLORS.UBEREATS.black} />
          ) : (
            <Icon type='ant-design' name='eyeo' size={24} color={Constants.COLORS.UBEREATS.black} />
          )}
        </TouchableOpacity>
      )}
      <AppErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: Constants.COLORS.UBEREATS.medium,
    backgroundColor: Constants.COLORS.UBEREATS.light,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputError: {
    borderColor: Constants.COLORS.UBEREATS.denger
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 32
  }
});