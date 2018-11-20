import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ list, height, title, hasIndicators }) => {
  const randomId = `carousel-${Math.random().toString(36).substring(7)}`;

  const imageList = list.map((image, index) => (
    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`carousel-${randomId}-item-${image.img}`}>
      {
        // Use a height to force a consistent aspect ratio on images (doesn't work in modals)
        height
          ? (
            <div className="img-crop" style={{ backgroundImage: `url(${image.img})`, height }}>
              <img className="img-fluid w-100" src={image.img} alt={image.img} />
            </div>
          )
          : <img className="img-fluid w-100 " src={image.img} alt={image.desc} />
      }
    </div>
  ));

  const indicators = list.map((image, index) => (
    // Indicators must be used only in modals
    <li
      key={`carousel-${randomId}-indicator-${image.img}`}
      data-target={`#${randomId}`}
      data-slide-to={index}
      className={index === 0 ? 'active' : ''}
    />
  ));


  return (
    <div id={randomId} className="carousel carousel-fade slide" data-ride="carousel" data-interval="0">

      <div className="carousel-inner">
        {imageList}
      </div>

      {/* { title
        && (
        <header>
          <h3 className="text-white text-center mb-2">{title}</h3>
        </header>
        )
      } */}

      { hasIndicators
        && (
        <ol className="carousel-indicators">
          {indicators}
        </ol>
        )
      }

      <a className="carousel-control-prev" href={`#${randomId}`} role="button" data-slide="prev">
        <i className="mdi mdi-lg mdi-chevron-left" aria-hidden="true"/>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={`#${randomId}`} role="button" data-slide="next">
        <i className="mdi mdi-lg mdi-chevron-right" aria-hidden="true"/>
        <span className="sr-only">Next</span>
      </a>

    </div>
  );
};

Carousel.defaultProps = {
  height: undefined,
  hasIndicators: false,
};

Carousel.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
  height: PropTypes.number,
  title: PropTypes.string,
  hasIndicators: PropTypes.bool,
};

export default Carousel;
