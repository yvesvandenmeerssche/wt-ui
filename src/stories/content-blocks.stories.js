import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import AppFooter from '../components/AppFooter';
import { withLayoutPreview, withCodePreview } from './HOCs/with-docs'

// Readme files
import Header from './content-blocks/header.md';
import Content from './content-blocks/content.md';
import Footer from './content-blocks/footer.md';
import SectionWrapper from './content-blocks/section-wrapper.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// APP HEADER
storiesOf('Content Blocks', module)

  .addDecorator(StoryRouter())

  // App header
  .add('Header', withLayoutPreview(Header, () =>
    <div style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, overflow: 'auto'}}>
      <header id="app-header" className="header-sticky border border-muted">
        <h1 className="mb-0 p-1">Header</h1>
      </header>

      <div id="app-content" className="text-alpha">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
        <p>Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
        <p>Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
        <p>Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
      </div>
    </div>
  ))
  // App content
  .add('Content', doc(Content))
  // App footer
  .add('Footer', withLayoutPreview(Footer, () =>
    <AppFooter/>
  ))
  // Section Wrapper
  .add('Section Wrapper', withLayoutPreview(SectionWrapper, () =>
    <article className="section-wrapper bg-grad">
      <div className="container">
      <div className="row">

      <div className="col-12 col-md-5">
        <h2 className="text-white">
          Líf Token
        </h2>
        <p className="lead text-white">
          Líf is used to exchange data and value between Winding Tree smart contracts, companies and users.
        </p>
      </div>
      </div>
      </div>
    </article>
  ))
