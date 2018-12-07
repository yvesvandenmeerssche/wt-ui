# Carousel

<p class="lead">We use the this component for cycling through images.</p>

Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities to appropriately size content.

Note that the carousel width will be defined by its container.

<!-- STORY -->

```html
<div id="img-carousel" class="carousel slide" data-ride="carousel">

  <!-- Content -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>

  <!-- Controls -->
  <a class="carousel-control-prev" href="#img-carousel" role="button" data-slide="prev">
    <i class="mdi mdi-48px mdi-chevron-left" aria-hidden="true"/>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#img-carousel" role="button" data-slide="next">
    <i class="mdi mdi-48px mdi-chevron-right" aria-hidden="true"/>
    <span class="sr-only">Next</span>
  </a>

</div>
```
