# Carousel

<p class="lead">A slideshow component for cycling through elements (images or slides of text).</p>

The carousel CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities to appropriately size content.

Previous/next controls and indicators, are optional.

<!-- STORY -->

```html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

## Also check

Refer to Bootstrap's documentation for more information.

* [How it works][0]
* [Example][1]
  * [Slides only][2]
  * [With controls][3]
  * [With indicators][4]
  * [With captions][5]

* [Usage][6]
  * [Via data attributes][7]
  * [Via JavaScript][8]
  * [Options][9]
  * [Methods][10]
  * [Events][11]

[0]: https://getbootstrap.com/docs/4.0/components/carousel/#how-it-works
[1]: https://getbootstrap.com/docs/4.0/components/carousel/#example
[2]: https://getbootstrap.com/docs/4.0/components/carousel/#slides-only
[3]: https://getbootstrap.com/docs/4.0/components/carousel/#with-controls
[4]: https://getbootstrap.com/docs/4.0/components/carousel/#with-indicators
[5]: https://getbootstrap.com/docs/4.0/components/carousel/#with-captions
[6]: https://getbootstrap.com/docs/4.0/components/carousel/#usage
[7]: https://getbootstrap.com/docs/4.0/components/carousel/#via-data-attributes
[8]: https://getbootstrap.com/docs/4.0/components/carousel/#via-javascript
[9]: https://getbootstrap.com/docs/4.0/components/carousel/#options
[10]: https://getbootstrap.com/docs/4.0/components/carousel/#methods
[11]: https://getbootstrap.com/docs/4.0/components/carousel/#events