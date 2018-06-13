# Modal

Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the `<body>`.

Whenever possible, place your modal HTML in a top-level position.

The autofocus HTML attribute has no effect in modals.

<!-- STORY -->

```html
<div class="modal" id="exampleModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<hr>

<button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
```

## Also check

Refer to Bootstrap's documentation for more information.

* [Examples][0]
  * [Scrolling long content][3]
  * [Vertically centered][4]
  * [Tooltips and popovers][5]
  * [Using the grid][6]
  * [Varying modal content][7]
  * [Remove animation][8]
  * [Dynamic heights][9]
  * [Accessibility][10]
  * [Embedding YouTube videos][11]

* [Optional sizes][12]
  * [Large modal][13]
  * [Small modal][14]

* [Usage][15]
  * [Via data attributes][16]
  * [Via JavaScript][17]
  * [Options][18]
  * [Methods][19]
  * [Events][20]

[0]: https://getbootstrap.com/docs/4.0/components/modal/#examples
[3]: https://getbootstrap.com/docs/4.0/components/modal/#scrolling-long-content
[4]: https://getbootstrap.com/docs/4.0/components/modal/#vertically-centered
[5]: https://getbootstrap.com/docs/4.0/components/modal/#tooltips-and-popovers
[6]: https://getbootstrap.com/docs/4.0/components/modal/#using-the-grid
[7]: https://getbootstrap.com/docs/4.0/components/modal/#varying-modal-content
[8]: https://getbootstrap.com/docs/4.0/components/modal/#remove-animation
[9]: https://getbootstrap.com/docs/4.0/components/modal/#dynamic-heights
[10]: https://getbootstrap.com/docs/4.0/components/modal/#accessibility
[11]: https://getbootstrap.com/docs/4.0/components/modal/#embedding-youtube-videos
[12]: https://getbootstrap.com/docs/4.0/components/modal/#optional-sizes
[13]: https://getbootstrap.com/docs/4.0/components/modal/#large-modal
[14]: https://getbootstrap.com/docs/4.0/components/modal/#small-modal
[15]: https://getbootstrap.com/docs/4.0/components/modal/#usage
[16]: https://getbootstrap.com/docs/4.0/components/modal/#via-data-attributes
[17]: https://getbootstrap.com/docs/4.0/components/modal/#via-javascript
[18]: https://getbootstrap.com/docs/4.0/components/modal/#options
[19]: https://getbootstrap.com/docs/4.0/components/modal/#methods
[20]: https://getbootstrap.com/docs/4.0/components/modal/#events