import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme as defaultTheme, DefaultTheme } from '../theme';

export interface ThemeProviderProps {
  theme?: DefaultTheme;
  children: React.ReactNode;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme || defaultTheme}>{children}</StyledThemeProvider>
);
