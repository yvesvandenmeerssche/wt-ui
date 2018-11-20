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
import Slider from "react-slick";

// Readme files
import Header from './content-blocks/header.md';
import Content from './content-blocks/content.md';
import Footer from './content-blocks/footer.md';
import SectionWrapper from './content-blocks/section-wrapper.md';
import DevsBlock from './content-blocks/devs-block.md';
import PartnersBlock from './content-blocks/partners-block.md';

// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


const slider = {
  settings: {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    speed: 10000,
    touchMove: false,
    variableWidth: true
  },
  data: {
    developers: [
      {name: "Maksim Izmaylov", img: "https://windingtree.com/assets/img/already-with-us/developers/max.jpg"},
      {name: "Jakub Vysoky", img: "https://windingtree.com/assets/img/already-with-us/developers/jakub.jpg"},
      {name: "Matias Oveja Smith", img: "https://windingtree.com/assets/img/already-with-us/developers/matias.jpg"},
      {name: "Augusto Lemble", img: "https://windingtree.com/assets/img/already-with-us/developers/augusto.jpg"},
      {name: "Jirka Chadima", img: "https://windingtree.com/assets/img/already-with-us/developers/jirka.jpg"},
      {name: "Nico Calabrese", img: "https://windingtree.com/assets/img/already-with-us/developers/nico.jpg"},
      {name: "Alex Menschikov", img: "https://windingtree.com/assets/img/already-with-us/developers/alex.jpg"},
      {name: "Robin Gottfried", img: "https://windingtree.com/assets/img/already-with-us/developers/robin.jpg"},
      {name: "OG Satoshi", img: "https://windingtree.com/assets/img/already-with-us/developers/og-satoshi.jpg"},
      {name: "Dave Montali", img: "https://windingtree.com/assets/img/already-with-us/developers/dave.jpg"},
      {name: "Pablo", img: "https://windingtree.com/assets/img/already-with-us/developers/pablo.jpeg"},
      {name: "Juan Ignacio Gipponi", img: "https://windingtree.com/assets/img/already-with-us/developers/juan.jpeg"}
    ],
    partners: [
      [
        {name: 'air-new-zealand', img: "https://windingtree.com/assets/img/partners/slider-1/air-new-zealand.svg"},
        {name: 'airfranceklm', img: "https://windingtree.com/assets/img/partners/slider-1/airfranceklm.svg"},
        {name: 'austrian', img: "https://windingtree.com/assets/img/partners/slider-1/austrian.svg"},
        {name: 'nordic', img: "https://windingtree.com/assets/img/partners/slider-1/nordic.png"},
        {name: 'siesta', img: "https://windingtree.com/assets/img/partners/slider-1/siesta.png"},
        {name: 'swiss', img: "https://windingtree.com/assets/img/partners/slider-1/swiss.svg"}
      ],
      [
        {name: 'brussels', img: "https://windingtree.com/assets/img/partners/slider-2/brussels.svg"},
        {name: 'citizen', img: "https://windingtree.com/assets/img/partners/slider-2/citizen.png"},
        {name: 'eurowings', img: "https://windingtree.com/assets/img/partners/slider-2/eurowings.svg"},
        {name: 'logo-swissport', img: "https://windingtree.com/assets/img/partners/slider-2/logo-swissport.png"},
        {name: 'lufthansa', img: "https://windingtree.com/assets/img/partners/slider-2/lufthansa.svg"}
      ],
      [
        {name: 'Sciant', img: "https://windingtree.com/assets/img/partners/slider-3/Sciant.png"},
        {name: 'airgateway', img: "https://windingtree.com/assets/img/partners/slider-3/airgateway.jpg"},
        {name: 'erevmax', img: "https://windingtree.com/assets/img/partners/slider-3/erevmax.png"},
        {name: 'rsk', img: "https://windingtree.com/assets/img/partners/slider-3/rsk.png"},
        {name: 'zeppelin', img: "https://windingtree.com/assets/img/partners/slider-3/zeppelin.svg"}
      ]
    ]
  }
}


// APP HEADER
storiesOf('Content Blocks/ Primary', module)

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

  storiesOf('Content Blocks/ Secondary', module)

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
  // Devs Marquee
  .add('Devs Block', withCodePreview(DevsBlock, () =>
    <Slider className="devs-block" {...slider.settings}>

      {slider.data.developers.map(developer => {
        return (

        <div className="devs-block-dev">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="60" viewBox="0 0 54 60" className="devs-block-dev-img">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <mask id="mask2" fill="white">
                <path d="M26.76,0a7.17,7.17,0,0,0-3.41,1L3.41,12.58A6.62,6.62,0,0,0,0,18.39V41.61a6.72,6.72,0,0,0,3.41,5.81L23.35,59a7.4,7.4,0,0,0,3.41,1,7.9,7.9,0,0,0,3.89-1L50.59,47.42A6.76,6.76,0,0,0,54,41.61V18.39a6.66,6.66,0,0,0-3.41-5.81L30.65,1A7.7,7.7,0,0,0,26.76,0Z" id="path2"></path>
              </mask>
              <image mask="url(#mask2)" width="54" height="60" xlinkHref={developer.img}></image>
            </g>
          </svg>
          <p className="devs-block-dev-name">{developer.name}</p>
        </div>

      )})}

    </Slider>
  ))
  // Partners Block
  .add('Partners Block', withCodePreview(PartnersBlock, () =>
    <div>
      <Slider className="partners-block" {...slider.settings}>
        <h4 className="partners-block-title">Already joined us</h4>
        {slider.data.partners[0].map(partner => {
        return (
          <img className="partners-block-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>

      <Slider className="partners-block" {...slider.settings} rtl={true}>
        <h4 className="partners-block-title">Already joined us</h4>
        {slider.data.partners[1].map(partner => {
        return (
          <img className="partners-block-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>

      <Slider className="partners-block" {...slider.settings}>
        <h4 className="partners-block-title">Tech partners</h4>
        {slider.data.partners[2].map(partner => {
        return (
          <img className="partners-block-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>
    </div>

  ))
