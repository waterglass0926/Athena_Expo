import React from 'react';
import { useFormikContext } from 'formik';

import '@/utils/i18n';
import { AppButton } from '../others/AppButton';
import Constants from '@/constants';
import Functions from '@/utils';

export const AppSubmitButton = ({ title, ...rest }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton title={title} onPress={handleSubmit} {...rest} />
  );
};