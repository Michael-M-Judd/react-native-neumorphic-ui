import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Box } from '.';
import { StoryWrapper } from '../../storybook/StoryWrapper/StoryWrapper';
import { Text } from 'react-native';

storiesOf('Box', module)
  .addDecorator((storyFn) => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('with spacing', () => (
    <Box margin={20} padding={30}>
      <Text style={{ color: 'white' }}>Box margin + padding</Text>
    </Box>
  ))
  .add('with flex', () => (
    <Box alignItems="center">
      <Text style={{ color: 'white' }}>Box with alignItems= center </Text>
    </Box>
  ))
  .add('with position', () => (
    <Box top={300}>
      <Text style={{ color: 'white' }}>Box with top= 300</Text>
    </Box>
  ));
