import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'

// Readme files
import Headings from './typography/headings.md';
import Display__Headings from './typography/display__headings.md';

import InlineTextElements from './typography/inline-text-elements.md';
import Lead from './typography/lead.md';
import Links from './typography/links.md';
import Dividers from './typography/dividers.md';
import Abbreviations from './typography/abbreviations.md';
import textUtilities from './typography/text-utilities.md';

import Blockquotes from './typography/blockquotes.md';
import Blockquotes__WTblockquote from './typography/blockquotes__wt-blockquote.md';
import Blockquotes__WTblockquoteAlt from './typography/blockquotes__wt-blockquote-alt.md';

import Lists from './typography/lists.md';
import Lists__Unstyled from './typography/lists__unstyled.md';
import Lists__Inline from './typography/lists__inline.md';
import Lists__Description from './typography/lists__description.md';

import Code__Inline from './typography/code__inline.md';
import Code__Blocks from './typography/code__blocks.md';
import Code__Variables from './typography/code__variables.md';
import Code__UserInput from './typography/code__user-input.md';
import Code__SampleOutput from './typography/code__sample-output.md';



// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// HEADINGS
storiesOf('Typography/Headings', module)

  // Overview
  .add('Overview', withCleanPreview(Headings, () =>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Heading</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
          <td><span className="h1">h1. Heading</span></td>
        </tr>
        <tr>
          <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
          <td><span className="h2">h2. Heading</span></td>
        </tr>
        <tr>
          <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
          <td><span className="h3">h3. Heading</span></td>
        </tr>
        <tr>
          <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
          <td><span className="h4">h4. Heading</span></td>
        </tr>
        <tr>
          <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
          <td><span className="h5">h5. Heading</span></td>
        </tr>
        <tr>
          <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
          <td><span className="h6">h6. Heading</span></td>
        </tr>
      </tbody>
    </table>
  ))
  // Display Headings
  .add('Display headings', withCodePreview(Display__Headings, () =>
    <table className="table">
      <tbody>
        <tr><td className="border-top-0"> <h1 className="display-1">Display 1</h1> </td></tr>
        <tr><td> <h1 className="display-2">Display 2</h1> </td></tr>
        <tr><td> <h1 className="display-3">Display 3</h1> </td></tr>
        <tr><td> <h1 className="display-4">Display 4</h1> </td></tr>
      </tbody>
    </table>
  ))


// INLINE TEXT ELEMENTS
storiesOf('Typography/Inline text elements', module)

  // Overview
  .add('Overview', withCodePreview(InlineTextElements, () =>
    <div>
      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      <p><del>This line of text is meant to be treated as deleted text.</del></p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
      <p><u>This line of text will render as underlined</u></p>
      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
    </div>
  ))
  // Lead
  .add('Lead', withCodePreview(Lead, () =>
    <p className="lead">
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
    </p>
  ))
  // Links
  .add('Links', withCodePreview(Links, () =>
    <a href="https://windingtree.com" target="_blank">Link sample.</a>
  ))
  // Dividers
  .add('Dividers', withCodePreview(Dividers, () =>
    <div>
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <hr/>
      <p>Duis mollis, est non commodo luctus.</p>
    </div>
  ))
  // Abbreviations
  .add('Abbreviations', withCodePreview(Abbreviations, () =>
    <div>
      <p><abbr title="attribute">attr</abbr></p>
      <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
    </div>
  ))
  // Text Utilities
  .add('Text utilities', doc(textUtilities))


// BLOCKQUOTES
storiesOf('Typography/Blockquotes', module)

// Overview
.add('Overview', withCodePreview(Blockquotes, () =>
  <blockquote className="blockquote">
    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
))
// WT blockquote
.add('WT blockquote', withCodePreview(Blockquotes__WTblockquote, () =>
  <blockquote className="blockquote d-flex flex-column-reverse flex-md-column align-items-center h-100 my-1 my-md-0">
    <p className="position-relative mb-1 px-1 px-md-2 text-center text-md-left">
      <i className="mdi mdi-36px mdi-format-quote-open"></i>
      In a decentralized travel distribution system, for example, there is no room for rent-seeking intermediaries, therefore the wealth they are currently hoarding will be distributed to the rest of the network, making travel cheaper for travelers and more profitable for travel companies.
      <i className="mdi mdi-36px mdi-format-quote-close"></i>
    </p>
    <footer class="blockquote-footer media d-block d-md-flex align-items-md-center pr-md-1 text-center text-md-left mb-1 mb-md-0 mt-md-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120" className="mr-1">
        <defs>
          <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path"></path>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <mask id="mask" fill="white">
            <use xlinkHref="#path"></use>
          </mask>
          <image mask="url(#mask)" width="108" height="120" xlinkHref="http://windingtree.com/assets/img/team/max.jpg"></image>
        </g>
      </svg>
      <cite className="media-body pr-md-1">
        <p className="h6">
          Maksim Izmaylov
        </p>

        <p className="small text-muted text-uppercase">
          Founder, CEO
        </p>
      </cite>
    </footer>
  </blockquote>
  ))
  // WT blockquote (alternative)
  .add('WT blockquote (alt)', withCodePreview(Blockquotes__WTblockquoteAlt, () =>
    <blockquote className="blockquote blockquote--alt d-flex flex-column-reverse text-center text-md-left">

      <p className="d-flex flex-column align-items-center d-md-block">
        "It's very exciting, but very early. It's a simpler and cheaper distribution chain that can challenge the booking giants"
        <a href="http://nordic.businessinsider.com/a-norwegian-hotel-billionaire-wants-to-use-blockchain-to-cut-out-expedia--/" className="mt-1 mt-md-0 border-bottom">
          Read full article
        </a>
      </p>

      <footer className="blockquote-footer media flex-column flex-md-row align-items-center mb-1">
        <img className="mb-1 mb-md-0 mr-md-1 rounded-circle" src="http://windingtree.com/assets/img/in-the-press/quotes/avatars/lisa-farrar.jpg" width="60" height="60" alt="Lisa Farrar"/>
        <cite className="media-body">
          Lisa Farrar
          <br/>
          Chief digital officer at Nordic Choice Hotels
        </cite>
      </footer>

    </blockquote>
  ))



// LISTS
storiesOf('Typography/Lists', module)

  // Overview
  .add('Overview', withCleanPreview(Lists, () =>
    <Resizable
      className="resizable"
      defaultSize={{ width: 'auto', height: 'auto' }}
      bounds={'parent'}
      enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
    >
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ul>
    </Resizable>
  ))
  // Unstyled
  .add('Unstyled', withCodePreview(Lists__Unstyled, () =>
    <ul className="list-unstyled">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
    ))
  // Inline
  .add('Inline', withCodePreview(Lists__Inline, () =>
    <ul className="list-inline">
      <li className="list-inline-item">Lorem ipsum</li>
      <li className="list-inline-item">Phasellus iaculis</li>
      <li className="list-inline-item">Nulla volutpat</li>
    </ul>
  ))
  // Description
  .add('Description', withCodePreview(Lists__Description, () =>
    <dl className="row">
      <dt className="col-sm-3">Description lists</dt>
      <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

      <dt className="col-sm-3">Euismod</dt>
      <dd className="col-sm-9">
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>

      <dt className="col-sm-3">Malesuada porta</dt>
      <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

      <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
      <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

      <dt className="col-sm-3">Nesting</dt>
      <dd className="col-sm-9">
        <dl className="row">
          <dt className="col-sm-4">Nested definition list</dt>
          <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
      </dd>
    </dl>
  ))


// CODE
storiesOf('Typography/Code', module)

  // Inline code
  .add('Inline code', withCodePreview(Code__Inline, () =>
    <div>
      For example, <code>&lt;section&gt;</code> should be wrapped as inline.
    </div>
  ))
  //Code blocks
  .add('Code blocks', withCodePreview(Code__Blocks, () =>
    <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
    &lt;p&gt;And another line of sample text here...&lt;/p&gt;
    </code></pre>
  ))
  // Variables
  .add('Variables', withCodePreview(Code__Variables, () =>
    <span><var>y</var> = <var>m</var><var>x</var> + <var>b</var></span>
  ))
  // User input
  .add('User input', withCodePreview(Code__UserInput, () =>
    <div>
      To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
      To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
    </div>
  ))
  // Sample output
  .add('Sample output', withCodePreview(Code__SampleOutput, () =>
    <samp>This text is meant to be treated as sample output from a computer program.</samp>
  ))
