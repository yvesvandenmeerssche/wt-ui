import React from 'react';
import { storiesOf } from '@storybook/react';

// Included addons
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Included components
import Button from '../components/Button';


/* Components - - - - - - - - - - - - - - - - - - - - - - - - */


export const actions = {
  onClick: action('Clicked')
};


// BUTTONS (Actions)
storiesOf('Buttons/Actions', module)
  .add('Text', () => (
    <Button {...actions}>Say Hi</Button>
  ))
  .add('Emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀</span></Button>
  ))


// BUTTONS (Linked)
storiesOf('Buttons/Links', module)
  .add('First', () => (
    <Button onClick={linkTo('Buttons/Links', 'Second')}>Go to "Second"</Button>
  ))
  .add('Second', () => (
    <Button onClick={linkTo('Buttons/Links', 'First')}>Go to "First"</Button>
  ))
  .add('Third', () => (
    <Button onClick={linkTo('Buttons/Links')}>Go to "Start"</Button>
  ));


