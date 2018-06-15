# Tabbable Panes

<p class="lead">Extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.</p>

Dynamic tabbed interfaces, require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes.

Note that dynamic tabbed interfaces should _not_ contain dropdown menus.

To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.show` to make the initial content visible.

<!-- STORY -->

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content mb-3" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
```

Refer to [Bootstrap's documentation](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior) for more information.