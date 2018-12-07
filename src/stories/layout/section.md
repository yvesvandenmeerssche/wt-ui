# Section

Use the `.app-section` class to add whitespace around a section and visually separate groups of related content.

By using this class, we guarantee the sections will have consistent padding adaptable to different viewport sizes.

Combined with the `.bg-grad`, and `.bg-light` utility classes to make the background different than white and make the sections stand out as shown bellow.

_Sections should not be used inside `.container`s, since must cover the whole width. Instead put a `.container` inside the wrapper to limit it contents width._

<!-- STORY -->

```html
<article class="app-section bg-grad">
  <div class="container">
    ...
  </div>
</article>
```

## Background Images

Secctions suport background images. Use the `.app-section-img` class in a div inside the `.app-section` wrapper and indicate the image path using the style attribute `background-image`.
If necessary the opacity can be changed by using the `opacity` CSS property.

Background images will be aligned to the right side bt default. Images will change their size automatically, from `cover` (in small viewports) to `contain` (in large screens).

<article class="app-section bg-grad">
<div class="app-section-img" style="background-image: url(https://windingtree.com/assets/img/banners/lif-token-bg.svg)"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2 class="text-white">
            Líf Token
        </h2>
        <p class="lead text-white">
            Líf is used to exchange data and value between Winding Tree smart contracts, companies and users.
        </p>
      </div>
    </div>
    <a href="/lif-token.html" class="btn btn-primary">
        Learn about Líf
    </a>
  </div>
</article>

```html
<article class="app-section bg-white">
  <div class="app-section-img" style="background-image: url(https://windingtree.com/assets/img/banners/lif-token-bg.svg)"></div>
  <div class="container">
    ...
  </div>
</article>
```

## Light Background and Alternative Layouts

As mentioned before, the wrapper can have ligh (`.bg-light`) and white background (without a background helper). The layout can be changed using column classes. Please refer to our design guidelines to review all the allowed variants.

<article class="app-section bg-light">
  <div class="container">
    <div class="col text-center">
      <h2>
        Designed for Driving Innovation
      </h2>
      <p class="lead">
        Winding Tree is a non-profit foundation that drives the development of open-source protocols to allow any company, big or small, or even an individual developer, to try them out and integrate with the platform in no time.
      </p>
    </div>
  </div>
</article>

```html
<article class="app-section bg-white">
  <div class="container">
    ...
  </div>
</article>
```