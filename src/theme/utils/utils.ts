import { StyledProps, DefaultTheme, SpaceProps } from '../theme.types';

type Palettes = keyof DefaultTheme['colors'];

export const getThemeColor = <T extends Palettes>(
  palette: T,
  color: keyof DefaultTheme['colors'][T]
) => ({ theme }: StyledProps): string => {
  const themeColor = theme.colors[palette][color];

  if (process.env.NODE_ENV !== 'production' && color === undefined) {
    console.warn('Theme color not found');
    return '';
  }

  return String(themeColor);
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

export const getMarginProps = ({
  margin,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight
}: SpaceProps) => ({
  margin,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight
});

export const getPaddingProps = ({
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight
}: SpaceProps) => ({
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight
});
