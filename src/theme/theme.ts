import { DefaultTheme } from './theme.types';

export const theme: DefaultTheme = {
  palette: {
    common: {
      white: '#FFF',
      black: '#000'
    },
    primary: {
      main: '#141923',
      light: '#4d5463',
      dark: '#00000A',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#5b86ff',
      dark: '#2853CC',
      light: '#75A0FF',
      contrastText: '#141923'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9fb4da',
      disabled: '#475266'
    }
  },
  typography: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  button: {}
};
