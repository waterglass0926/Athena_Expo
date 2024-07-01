import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Constants from '@/constants';
import { ThemeType, LanguageType } from '@/types/athena';

interface ActionType<T> {
  state: any;
  payload: T;
};

interface StateType {
  load: boolean;
  theme: ThemeType | any;
  language: LanguageType | any;
};

const initialState: StateType = {
  load: false,
  theme: {
    MODE: 'LIGHT',
    NAME: Constants.COLORS.ACTION[16].NAME,
    PRIMARY: Constants.COLORS.ACTION[16].PRIMARY,
    SECONDARY: Constants.COLORS.ACTION[16].SECONDARY,
    TERTIARY: Constants.COLORS.ACTION[16].TERTIARY,
    QUATERNARY: Constants.COLORS.ACTION[16].QUATERNARY,
    BACKCOLOR: Constants.COLORS.THEME[4].LIGHT,
    FORECOLOR: Constants.COLORS.THEME[4].NIGHT
  },
  language: Constants.DATA.LANGUAGES[0]
};

// Define your slice
export default athenaSlice = createSlice({
  name: 'athena',
  initialState,
  reducers: {
    setLoad: (state, action: PayloadAction<boolean>) => {
      state.load = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeType | any>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LanguageType | any>) => {
      state.language = action.payload;
    },
  },
});

export const { setLoad, setTheme, setLanguage } = athenaSlice.actions;