import React, { useLayoutEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Components from '@/components/youtube/v1';

export const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [explore, setExplore] = useState(false);
  return (
    <>
      {explore && <Components.Sidebar explore={explore} setExplore={setExplore} />}
      <Components.Navbar />
      <Components.Explore explore={explore} setExplore={setExplore} />
      <Components.Posts url='https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLARazyJycaayer_rgOlUTRQVKk5JA' />
      <Components.Posts url='https://i.ytimg.com/vi/YgDpr_CrM8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaPhQ1CJFw6IMaykGQNiKkV3ijng' />
      <Components.Posts url='https://i.ytimg.com/vi/rmd3EM_RR_E/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAooFigIMCAAQARhBIGIoZTAP&rs=AOn4CLCDHqOVy-qfUxQ_PaiC4oTTyGNM4w' />
      <Components.Posts />
    </>
  );
};