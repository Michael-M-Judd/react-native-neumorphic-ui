import { StyledProps, DefaultTheme } from '../theme.types';

type Palettes = keyof DefaultTheme['palette'];

export const getThemeColor = <T extends Palettes>(
  palette: T,
  color: keyof DefaultTheme['palette'][T]
) => ({ theme }: StyledProps): string => {
  const themeColor = theme.palette[palette][color];

  if (process.env.NODE_ENV !== 'production' && color === undefined) {
    console.warn('Theme color not found');
    return '';
  }

  // @ts-ignore
  return themeColor;
};

const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

export const hexToRgba = (hex: string, alpha?: number): string => {
  const result = hexToRgb(hex);

  if (result !== null) {
    const { r, g, b } = result;

    return `rgba(${r}, ${g}, ${b}, ${alpha ? alpha : '1.0'})`;
  }

  return '';
};
