import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { space } from 'styled-system';
import { Typography } from '../Typography';
import { StyledProps, getThemeColor, hexToRgba, Margin } from '../theme';

type Size = 'small' | 'regular' | 'large';

export interface ButtonProps extends TouchableOpacityProps, Margin {
  children: React.ReactNode | string;
  size?: Size;
}

const getBoxShadow = ({ theme }: StyledProps): string =>
  theme.button?.boxShadow || '3px 3px 13px #000000';

const getBorderRadius = ({ theme }: StyledProps) => theme.button?.borderRadius || 50;

const StyledInnerButton = styled(View)`
  box-shadow: ${getBoxShadow};
  border-radius: ${getBorderRadius}px;
  margin: 10px;
`;

/* stylelint-disable */
const StyledTouchableOpacity = styled(TouchableOpacity)`
  background: ${getThemeColor('primary', 'light')};
  border: 2px solid ${getThemeColor('primary', 'light')};
  border-radius: ${getBorderRadius}px;
  position: relative;
  ${space}
`;
/* stylelint-enable */

const StyledBottomShadow = styled(View)`
  box-shadow: 7px 7px 16px ${({ theme }) => hexToRgba(theme.colors.primary.dark, 0.35)};
`;

export const StyledTopShadow = styled(View)`
  box-shadow: -4px -4px 8px ${({ theme }) => hexToRgba(theme.colors.primary.light, 0.3)};
`;

const StyledGradient = styled(LinearGradient)`
  box-shadow: ${getBoxShadow};
  border-radius: ${getBorderRadius}px;
  padding: 20px 30px;
  align-items: center;
`;

const StyledOuterGradient = styled(LinearGradient)`
  border-radius: ${getBorderRadius}px;
`;

export const Button = ({ children, onPress, style, ...props }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledTouchableOpacity {...props} onPress={onPress} style={style}>
      <StyledTopShadow>
        <StyledBottomShadow>
          <StyledOuterGradient
            colors={[theme.colors.primary.main, theme.colors.primary.light]}
            start={{ x: 0.3, y: -1.3 }}
            end={{ x: 2, y: 3 }}
          >
            <StyledInnerButton>
              <StyledGradient
                colors={[theme.colors.primary.light, theme.colors.primary.main]}
                start={{ x: 0.3, y: -1.3 }}
                end={{ x: 0.5, y: 1.4 }}
              >
                <Typography variant="button">{children}</Typography>
              </StyledGradient>
            </StyledInnerButton>
          </StyledOuterGradient>
        </StyledBottomShadow>
      </StyledTopShadow>
    </StyledTouchableOpacity>
  );
};
