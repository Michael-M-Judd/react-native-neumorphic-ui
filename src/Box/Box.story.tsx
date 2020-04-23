import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Box } from '.';
import { StoryWrapper } from '../../storybook/StoryWrapper/StoryWrapper';
import { Typography } from '../Typography';

storiesOf('Box', module)
  .addDecorator((storyFn: Function) => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('with spacing', () => (
    <Box margin={20} padding={30}>
      <Typography>Box margin + padding</Typography>
    </Box>
  ))
  .add('with flex', () => (
    <Box alignItems="center">
      <Typography>Box with alignItems= center </Typography>
    </Box>
  ))
  .add('with position', () => (
    <Box top={300}>
      <Typography>Box with top= 300</Typography>
    </Box>
  ));
