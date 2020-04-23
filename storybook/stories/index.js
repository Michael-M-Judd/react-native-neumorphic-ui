import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import '../../src/Button/Button.story';
import '../../src/Card/Card.story';
import '../../src/Box/Box.story';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
