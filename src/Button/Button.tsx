import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { StyledProps, getThemeColor, hexToRgba } from '../theme';

type Size = 'small' | 'regular' | 'large';

export interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode | string;
  size?: Size;
}

const getBoxShadow = ({ theme }: StyledProps): string =>
  theme.button?.boxShadow || '3px 3px 13px #000000';

const getBorderRadius = ({ theme }: StyledProps) =>
  theme.button?.borderRadius || 50;

const getFontStyle = ({theme}: StyledProps) => theme.typography.fontFamily;

const getFontWeight = ({theme}: StyledProps) => theme.typography.fontWeightBold;

const getFontSize = ({theme}: StyledProps) => theme.typography.fontSize;

const getFontColor = getThemeColor('primary', 'contrastText');

const StyledInnerButton = styled(View)`
  box-shadow: ${getBoxShadow};
  border-radius: ${getBorderRadius}px;
  margin: 10px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  background: ${getThemeColor('primary', 'light')};
  border: 2px solid ${getThemeColor('primary', 'light')};
  border-radius: ${getBorderRadius}px;
  position: relative;
`

const StyledBottomShadow = styled(View)`
  box-shadow: 7px 7px 16px ${({theme}) => hexToRgba(theme.palette.primary.dark, 0.35)};
`;

export const StyledTopShadow = styled(View)`
  box-shadow: -4px -4px 8px ${({ theme }) => hexToRgba(theme.palette.primary.light, 0.3)};
`

const StyledText = styled(Text)`
  font-family: ${getFontStyle};
  font-weight: ${getFontWeight};
  font-size: ${getFontSize}px;
  color: ${getFontColor};
`

const StyledGradient = styled(LinearGradient)`
  box-shadow: ${getBoxShadow};
  border-radius: ${getBorderRadius}px;
  padding: 20px 30px;
  align-items: center;
`;

const StyledOuterGradient = styled(LinearGradient)`
  border-radius: ${getBorderRadius}px;
`;

const StyledShadow = styled(View)`
  border: 0 solid ${getThemeColor('primary', 'light')};
  border-radius: ${getBorderRadius}px;
`;

export const Button = ({ children, onPress, style, ...props }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledTouchableOpacity {...props} onPress={onPress} style={style}>
      <StyledTopShadow>
        <StyledBottomShadow>
        <StyledOuterGradient
          colors={[theme.palette.primary.main, theme.palette.primary.light]}
          start={{x: 0.3, y: -1.3}} end={{x: 2, y: 3}}
        >
          <StyledInnerButton>
            <StyledGradient 
              colors={[theme.palette.primary.light, theme.palette.primary.main]}
              start={{x: 0.3, y: -1.3}} end={{x: 0.5, y: 1.4}}
            >
              <StyledText>{children}</StyledText>
            </StyledGradient>
          </StyledInnerButton>
        </StyledOuterGradient>
        </StyledBottomShadow>
      </StyledTopShadow>
    </StyledTouchableOpacity>
  );
};
