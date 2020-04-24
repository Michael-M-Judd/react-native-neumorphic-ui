import React from 'react';
import { withInfo } from '../../utils';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { {{pascalcase name}} } from './index';

storiesOf("Components/{{pascalcase name}}", module).add(
  "default",
  () => (
    <{{pascalcase name}} dummyProp={text("dummyProp", "initialValue")} />
  )
);
