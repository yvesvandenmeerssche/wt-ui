# Dropdown

<p class="lead">Dropdowns are toggleable, contextual overlays for displaying lists of links and more.</p>

Teu require the Bootstrap dropdown JavaScript plugin and a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection.

Any single `.btn` can be turned into a dropdown toggle with some markup changes. You can do this with any button variant.

<!-- STORY -->

```html
<!-- Single button dropdown -->
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<!-- Split outline-dark button -->
<div class="btn-group">
  <button type="button" class="btn btn-outline-dark">Action</button>
  <button type="button" class="btn btn-outline-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
```

## Also check

Refer to Bootstrap's documentation for more information.

* [Sizing][0]
* [Dropup variation][1]
* [Dropright variation][2]
* [Dropleft variation][3]
* [Menu items][4]
* [Menu alignment][5]
* [Menu headers][6]
* [Menu dividers][7]
* [Menu forms][8]
* [Active menu items][9]
* [Disabled menu items][10]
* [Usage][11]
  * [Via data attributes][12]
  * [Via JavaScript][13]
  * [Options][14]
  * [Methods][15]
  * [Events][16]

[0]: https://getbootstrap.com/docs/4.0/components/dropdowns/#sizing
[1]: https://getbootstrap.com/docs/4.0/components/dropdowns/#dropup-variation
[2]: https://getbootstrap.com/docs/4.0/components/dropdowns/#dropright-variation
[3]: https://getbootstrap.com/docs/4.0/components/dropdowns/#dropleft-variation
[4]: https://getbootstrap.com/docs/4.0/components/dropdowns/#menu-items
[5]: https://getbootstrap.com/docs/4.0/components/dropdowns/#menu-alignment
[6]: https://getbootstrap.com/docs/4.0/components/dropdowns/#menu-headers
[7]: https://getbootstrap.com/docs/4.0/components/dropdowns/#menu-dividers
[8]: https://getbootstrap.com/docs/4.0/components/dropdowns/#menu-forms
[9]: https://getbootstrap.com/docs/4.0/components/dropdowns/#active-menu-items
[10]: https://getbootstrap.com/docs/4.0/components/dropdowns/#disabled-menu-items
[11]: https://getbootstrap.com/docs/4.0/components/dropdowns/#usage
[12]: https://getbootstrap.com/docs/4.0/components/dropdowns/#via-data-attributes
[13]: https://getbootstrap.com/docs/4.0/components/dropdowns/#via-javascript
[14]: https://getbootstrap.com/docs/4.0/components/dropdowns/#options
[15]: https://getbootstrap.com/docs/4.0/components/dropdowns/#methods
[16]: https://getbootstrap.com/docs/4.0/components/dropdowns/#events
