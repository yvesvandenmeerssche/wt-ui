import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';


storiesOf('Working (by Storybook)', module)
  .addDecorator(story => (
    <div style={{margin: '-5px -10px'}}>
      {story()}
    </div>
  ))
  .add('Wellcome to Storybook', () => <Welcome showApp={linkTo('Working (by Storybook)', 'Button (text)')} />)
  .add('Button (text)', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('Button (emoji)', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
