import { DefaultTheme } from 'styled-components';
import { SpaceProps as _SpaceProps } from 'styled-system';

export interface StyledProps {
  theme: DefaultTheme;
}

export interface Margin {
  margin?: _SpaceProps['margin'];
  marginTop?: _SpaceProps['marginTop'];
  marginBottom?: _SpaceProps['marginBottom'];
  marginRight?: _SpaceProps['marginRight'];
  marginLeft?: _SpaceProps['marginLeft'];
}

export interface Padding {
  padding?: _SpaceProps['padding'];
  paddingTop?: _SpaceProps['paddingTop'];
  paddingBottom?: _SpaceProps['paddingBottom'];
  paddingRight?: _SpaceProps['paddingRight'];
  paddingLeft?: _SpaceProps['paddingLeft'];
}

export interface SpaceProps extends Margin, Padding {}

export { DefaultTheme };
