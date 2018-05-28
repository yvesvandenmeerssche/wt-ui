import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme, withDocs, doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

// Readme files
import Header from './content-blocks/header.md';
import Content from './content-blocks/content.md';
import Footer from './content-blocks/footer.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// HOCs
import { withLayoutPreview } from './HOCs/with-docs'



// APP HEADER
storiesOf('Content Blocks', module)
.addDecorator(StoryRouter())
.add('Header', withLayoutPreview(Header, () => (
    <AppHeader/>
)))
.add('Content', doc(Content))
.add('Footer', withLayoutPreview(Footer, () => (
    <AppFooter/>
)));
