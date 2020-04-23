import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled(View)`
  background: ${({ theme }) => theme.colors.primary.main};
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
`;

export const StoryWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledView>{children}</StyledView>
);
