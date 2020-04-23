import {
  space,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  compose
} from 'styled-system';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { SpaceProps } from '../theme';

interface BoxProps extends SpaceProps, LayoutProps, FlexboxProps, PositionProps {}

const StyledView = styled(View)<BoxProps>(compose(space, layout, flexbox, position));

export const Box = StyledView;
