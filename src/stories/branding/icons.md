# Icons

Icons are not part of the framework, they can be added as a dependency. On our website we included materialicons.

Icons support different sizes, by using modifier CSS classes, mdi defaults are `.mdi-18px`, `.mdi-24px`, `.mdi-36px`, `.mdi-48px` and we added two additional modifier classes, `.mdi-lg` and `.mdi-xxl`.

Icons also support spin animations, rotation, and color variants, check the [materialicons website][0] website for a full list of the available icons and modifiers.

<!-- STORY -->

```html
<!-- Standard icons -->
<i className="mdi mdi-bitcoin mr-1"/>
<i className="mdi mdi-close mr-1"/>
<i className="mdi mdi-chevron-right mr-1"/>
<i className="mdi mdi-menu"/>

<!-- Social icons (24px) -->
<i className="mdi mdi-24px mdi-github-circle mr-1"/>
<i className="mdi mdi-24px mdi-github-box mr-1"/>
<i className="mdi mdi-24px mdi-twitter mr-1"/>
<i className="mdi mdi-24px mdi-medium mr-1"/>
<i className="mdi mdi-24px mdi-youtube mr-1"/>
<i className="mdi mdi-24px mdi-telegram mr-1"/>
<i className="mdi mdi-24px mdi-reddit mr-1"/>
<i className="mdi mdi-24px mdi-linkedin mr-1"/>
<i className="mdi mdi-24px mdi-link-variant mr-2"/>

<!-- Other sizes -->
<i className="mdi mdi-36px mdi-format-quote-open"/>
<i className="mdi mdi-36px mdi-format-quote-close"/>
<i className="mdi mdi-48px mdi-close"/>

<!-- Custom sizes -->
<i className="mdi mdi-lg mdi-chevron-left"/>
<i className="mdi mdi-lg mdi-chevron-right"/>
<i className="mdi mdi-xxl mdi-office-building"/>
```

[0]: https://cdn.materialdesignicons.com/2.5.94/