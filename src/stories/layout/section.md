# Section

The `.app-section` component is a content block intended to display highlighted information.

By default it does not have a backround color, combine with background utility classes like `.bg-grad`, or `.bg-light` to change it.

It should not be used inside a `.container` if it has a noticeable backround, since it must cover the whole width. Instead put a `.container` inside to limit it contents width.

<!-- STORY -->

```html
<article class="app-section bg-grad">
  <div class="container">
    ...
  </div>
</article>
```