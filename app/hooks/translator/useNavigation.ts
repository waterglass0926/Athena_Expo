import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation as _useNavigation } from '@react-navigation/core';

import { NavigationParamList } from '@/routes/stacks/translator';

export const useNavigation = () =>
  _useNavigation<StackNavigationProp<NavigationParamList>>();