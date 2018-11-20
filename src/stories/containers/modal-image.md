# Modal (image)

<p class="lead">Use image modals to display images in full screen.</p>

To use this modals just add `.modal-img` next to the `.modal` class. Header and footer are not required.

Images im modals have fluid width by default.

<!-- STORY -->

```html
<div class="modal modal-img fade" id="img-modal-demo" tabindex="-1" role="preview" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <img src="..." alt="Alt text"/>
      </div>
    </div>
  </div>
</div>

<hr>

<button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#img-modal-demo">
  Launch demo modal
</button>
```
