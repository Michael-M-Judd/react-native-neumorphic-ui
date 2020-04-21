import 'styled-components';

interface MainColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

// extend default theme
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: MainColor;
      secondary: MainColor;
      common: {
        white: string;
        black: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
    };
    typography: {
      fontFamily: string;
      fontSize: number;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
    };

    button?: {
      borderRadius?: number;
      boxShadow?: string;
    };
    card?: {
      borderRadius?: number;
    };
  }
}
