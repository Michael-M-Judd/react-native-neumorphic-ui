import { Text, TextProperties } from 'react-native';
import {
  typography,
  TypographyProps as _TypographyProps,
  color,
  ColorProps,
  variant,
  VariantArgs
} from 'styled-system';
import styled from 'styled-components/native';
import { StyledProps } from '../theme';

const getFontFamily = ({ theme }: StyledProps) => theme.typography.fontFamily;

const getDefaultColor = ({ theme }: StyledProps) => theme.colors.text.primary;

// TODO: make these grab from theme explicitly
const variants = {
  title: {
    fontSize: 42,
    color: 'text.primary',
    fontWeight: 700
  },
  subTitle: {
    fontSize: 24,
    color: 'text.secondary'
  },
  paragraph: {
    fontSize: 16,
    color: 'text.primary'
  },
  button: {
    fontSize: 16,
    color: 'text.primary',
    fontWeight: 700
  }
};

export interface TypographyProps extends TextProperties, ColorProps {
  fontWeight?: _TypographyProps['fontWeight'];
  textAlign?: _TypographyProps['textAlign'];
  fontSize?: _TypographyProps['fontSize'];
  variant?: keyof typeof variants;
}

/* stylelint-disable */
export const Typography = styled(Text)<TypographyProps>`
  font-family: ${getFontFamily};
  color: ${getDefaultColor};
  ${typography}
  ${color}
  ${variant({ variants })}
`;
/* stylelint-enable */
