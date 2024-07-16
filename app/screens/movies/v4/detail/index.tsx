import React from 'react';

import { Details } from './Details';
import { DetailsProvider } from '@/contexts/movies/v4/DetailsContext';

export function Detail({ route }) {
  const { id, mediaType } = route.params;
  return (
    <DetailsProvider id={id} mediaType={mediaType}>
      <Details />
    </DetailsProvider>
  );
};