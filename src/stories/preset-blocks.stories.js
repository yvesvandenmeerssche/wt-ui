import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import { withCodePreview } from './HOCs/with-docs'
import Slider from "react-slick";

// Readme files
import DevsMarquee from './preset-blocks/devs-marquee.md';
import PartnersMarquee from './preset-blocks/partners-marquee.md';

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
storiesOf('Preset Blocks', module)

  // Devs Marquee
  .add('Devs Marquee', withCodePreview(DevsMarquee, () =>
    <Slider className="devs-marquee" {...slider.settings}>

      {slider.data.developers.map(developer => {
        return (

        <div className="devs-marquee-dev">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="60" viewBox="0 0 54 60" className="devs-marquee-dev-img">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <mask id="mask2" fill="white">
                <path d="M26.76,0a7.17,7.17,0,0,0-3.41,1L3.41,12.58A6.62,6.62,0,0,0,0,18.39V41.61a6.72,6.72,0,0,0,3.41,5.81L23.35,59a7.4,7.4,0,0,0,3.41,1,7.9,7.9,0,0,0,3.89-1L50.59,47.42A6.76,6.76,0,0,0,54,41.61V18.39a6.66,6.66,0,0,0-3.41-5.81L30.65,1A7.7,7.7,0,0,0,26.76,0Z" id="path2"></path>
              </mask>
              <image mask="url(#mask2)" width="54" height="60" xlinkHref={developer.img}></image>
            </g>
          </svg>
          <p className="devs-marquee-dev-name">{developer.name}</p>
        </div>

      )})}

    </Slider>
  ))
  // Partners Marquee
  .add('Partners Marquee', withCodePreview(PartnersMarquee, () =>
    <div>
      <Slider className="partners-marquee" {...slider.settings}>
        <h4 className="partners-marquee-title">Already joined us</h4>
        {slider.data.partners[0].map(partner => {
        return (
          <img className="partners-marquee-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>

      <Slider className="partners-marquee" {...slider.settings} rtl={true}>
        <h4 className="partners-marquee-title">Already joined us</h4>
        {slider.data.partners[1].map(partner => {
        return (
          <img className="partners-marquee-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>

      <Slider className="partners-marquee" {...slider.settings}>
        <h4 className="partners-marquee-title">Tech partners</h4>
        {slider.data.partners[2].map(partner => {
        return (
          <img className="partners-marquee-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>
    </div>

  ))
