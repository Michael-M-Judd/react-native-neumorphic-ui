import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { space } from 'styled-system';
import { StyledProps, SpaceProps, getThemeColor, hexToRgba } from '../theme';

export interface CardProps extends TouchableOpacityProps, SpaceProps {
  children: React.ReactNode;
}

const getCardBorderRadius = ({ theme }: StyledProps): number => theme.card?.borderRadius || 8;

/* stylelint-disable */
const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${getThemeColor('primary', 'main')};
  border-radius: ${getCardBorderRadius}px;
  overflow: visible;
  ${space}
`;

const StyledLinearGradient = styled(LinearGradient)<SpaceProps>`
  border-radius: ${getCardBorderRadius}px;
  box-shadow: 7px 7px 16px ${({ theme }) => hexToRgba(theme.palette.primary.dark, 0.3)};
  padding: 20px;
  ${space}
`;
/* stylelint-enable */

const StyledBottomShadow = styled(View)`
  box-shadow: 7px 7px 16px ${({ theme }) => hexToRgba(theme.palette.primary.dark, 0.4)};
`;

export const StyledTopShadow = styled(View)`
  box-shadow: -4px -4px 8px ${({ theme }) => hexToRgba(theme.palette.primary.light, 0.35)};
`;

export const Card = ({
  onPress,
  children,
  padding,
  paddingBottom,
  paddingRight,
  paddingLeft,
  paddingTop,
  ...props
}: CardProps) => {
  const theme = useTheme();

  return (
    <StyledTouchableOpacity {...props} onPress={onPress}>
      <StyledTopShadow>
        <StyledBottomShadow>
          <StyledLinearGradient
            colors={[theme.palette.primary.light, theme.palette.primary.main]}
            start={{ x: -10, y: -10 }}
            end={{ x: 1, y: 1 }}
            padding={padding}
            paddingBottom={paddingBottom}
            paddingTop={paddingTop}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
          >
            {children}
          </StyledLinearGradient>
        </StyledBottomShadow>
      </StyledTopShadow>
    </StyledTouchableOpacity>
  );
};
