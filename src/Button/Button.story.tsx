import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '.';
import { StoryWrapper } from '../../storybook/StoryWrapper/StoryWrapper';

storiesOf('Button', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('default', () => <Button onPress={action('pressed')}>Click me!</Button>);
