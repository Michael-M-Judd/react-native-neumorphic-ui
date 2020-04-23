import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Typography } from '.';
import { StoryWrapper } from '../../storybook/StoryWrapper/StoryWrapper';

storiesOf('Typography', module)
  .addDecorator((storyFn: Function) => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .add('default', () => <Typography>default text</Typography>)
  .add('fontWeight bold', () => (
    <Typography onPress={action('pressed')} fontWeight="bold">
      this is bold!
    </Typography>
  ))
  .add('with custom color', () => <Typography color="#488">custom color</Typography>)
  .add('variants', () => (
    <>
      <Typography variant="title">This is a title</Typography>
      <Typography variant="subTitle">This is a subTitle</Typography>
      <Typography variant="paragraph">This is a paragraph</Typography>
      <Typography variant="button">Button text</Typography>
    </>
  ));
