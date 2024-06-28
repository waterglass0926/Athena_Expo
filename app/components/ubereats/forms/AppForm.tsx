import React from 'react';
import { Formik } from 'formik';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <>{children}</>
      )}
    </Formik>
  );
};