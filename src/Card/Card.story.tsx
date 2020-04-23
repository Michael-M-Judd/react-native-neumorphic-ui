import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Card } from '.';
import { Text } from 'react-native';
import { StoryWrapper } from '../../storybook/StoryWrapper/StoryWrapper';

storiesOf('Card', module)
  .addDecorator((storyFn) => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('default', () => (
    <Card onPress={action('pressed')}>
      <Text style={{ color: 'white' }}>Click me!</Text>
    </Card>
  ))
  .add('with custom padding and margins', () => (
    <Card onPress={action('pressed')} margin={50} paddingTop={20} paddingBottom={40}>
      <Text style={{ color: 'white' }}>Special margins and spacing</Text>
    </Card>
  ));
