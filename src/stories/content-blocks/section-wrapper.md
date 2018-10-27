# Section Wrapper

The `.section-wrapper` component is a content block intended to display highlighted information.

Ny default it does not have a backround color, combine with background utility classes to change it.

It should not be used inside a `.container` if it has a noticeable backround, since it must cover the whole width. Instead put a `.container` inside to limit it contents width.

<!-- STORY -->

```html
<article class="section-wrapper">
  <div class="container">
    ...
  </div>
</article>
```