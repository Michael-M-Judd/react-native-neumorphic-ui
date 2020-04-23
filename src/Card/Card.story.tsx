import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Card } from '.';
import { Typography } from '../Typography';
import { StoryWrapper } from '../../storybook/StoryWrapper/StoryWrapper';

storiesOf('Card', module)
  .addDecorator((storyFn: Function) => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('default', () => (
    <Card onPress={action('pressed')}>
      <Typography>Click me!</Typography>
    </Card>
  ))
  .add('with custom padding and margins', () => (
    <Card onPress={action('pressed')} margin={50} paddingTop={20} paddingBottom={40}>
      <Typography>Special margins and spacing</Typography>
    </Card>
  ));
