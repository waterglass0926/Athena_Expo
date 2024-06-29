import { RouteProp, useRoute as _useRoute } from '@react-navigation/core';

import { NavigationParamList } from '@/routes/stacks/translator';

export const useRoute = <RouteName extends keyof NavigationParamList>() =>
  _useRoute<RouteProp<NavigationParamList, RouteName>>();