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

import Lead from './typography/lead.md';
import InlineTextElements from './typography/inline-text-elements.md';
import Abbreviations from './typography/abbreviations.md';

import Blockquotes from './typography/blockquotes.md';
import Blockquotes__NamingASource from './typography/blockquotes__naming_a_source.md';
import Blockquotes__Alignment from './typography/blockquotes__alignment.md';

import Lists from './typography/lists.md';
import Lists__Unstyled from './typography/lists__unstyled.md';
import Lists__Inline from './typography/lists__inline.md';
import Lists__Description from './typography/lists__description.md';

import Code from './typography/code.md';
import Code__Inline from './typography/code__inline.md';
import Code__Blocks from './typography/code__blocks.md';
import Code__Variables from './typography/code__variables.md';
import Code__UserInput from './typography/code__user-input.md';
import Code__SampleOutput from './typography/code__sample-output.md';



// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


storiesOf('Typography', module)

  // Headings
  .add('Headings', withCleanPreview(Headings, () =>
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
    .add('    Display headings', withCodePreview(Display__Headings, () =>
      <table className="table">
        <tr> <td className="border-top-0"> <h1 className="display-1">Display 1</h1> </td> </tr>
        <tr> <td> <h1 className="display-2">Display 2</h1> </td> </tr>
        <tr> <td> <h1 className="display-3">Display 3</h1> </td> </tr>
        <tr> <td> <h1 className="display-4">Display 4</h1> </td> </tr>
      </table>
    ))

  // Lead
  .add('Lead', withCodePreview(Lead, () =>
    <p className="lead">
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
    </p>
  ))

  // Inline Text Elements
  .add('Inline text elements', withCodePreview(InlineTextElements, () =>
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

  // Text Utilities
  .add('Text utilities', () =>
    <div className="markdown-body">
      <h1>Text utilities</h1>
      <p>
        Change text alignment, transform, style, weight, and color with our <a href="#" style={{pointerEvents: 'none'}}>text utilities</a> and <a href="#" style={{pointerEvents: 'none'}}>color utilities</a>.
      </p>
    </div>
  )

  // Abbreviations
  .add('Abbreviations', withCodePreview(Abbreviations, () =>
    <div>
      <p><abbr title="attribute">attr</abbr></p>
      <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
    </div>
  ))

  // Blockquotes
  .add('Blockquotes', withCodePreview(Blockquotes, () =>
  <blockquote className="blockquote">
    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </blockquote>
  ))
    .add('    Naming a source', withCodePreview(Blockquotes__NamingASource, () =>
      <blockquote className="blockquote">
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
    ))
    .add('    Alignment', withCodePreview(Blockquotes__Alignment, () =>
      <div>
        <blockquote className="blockquote text-center">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <hr/>
        <blockquote className="blockquote text-right">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    ))

  // Lists
  .add('Lists', withCleanPreview(Lists, () =>
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
    .add('    Unstyled', withCodePreview(Lists__Unstyled, () =>
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
    .add('    Inline', withCodePreview(Lists__Inline, () =>
      <ul className="list-inline">
        <li className="list-inline-item">Lorem ipsum</li>
        <li className="list-inline-item">Phasellus iaculis</li>
        <li className="list-inline-item">Nulla volutpat</li>
      </ul>
    ))
    .add('    Description', withCodePreview(Lists__Description, () =>
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


  // Code
  .add('Code', doc(Code))
    .add('    Inline code', withCodePreview(Code__Inline, () =>
        <div>
          For example, <code>&lt;section&gt;</code> should be wrapped as inline.
        </div>
      ))
    .add('    Code blocks', withCodePreview(Code__Blocks, () =>
      <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
      &lt;p&gt;And another line of sample text here...&lt;/p&gt;
      </code></pre>
    ))
    .add('    Variables', withCodePreview(Code__Variables, () =>
      <span><var>y</var> = <var>m</var><var>x</var> + <var>b</var></span>
    ))
    .add('    User input', withCodePreview(Code__UserInput, () =>
      <div>
        To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
        To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
      </div>
    ))
    .add('    Sample output', withCodePreview(Code__SampleOutput, () =>
      <samp>This text is meant to be treated as sample output from a computer program.</samp>
    ))
