# Progress

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.

- The `.progress` is a wrapper and must indicate the max value of the progress bar. You can modify the default height using inline styles on this element.
- The inner `.progress-bar` indicates the progress so far, and requires an inline style to set their width.

Add labels to your progress bars by placing text within the `.progress-bar`.

Change the background color with utility classes.

<!-- STORY -->

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>

<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>

<!-- Different heights -->

<div class="progress mb-3" style={{height: 3}}>
  <div class="progress-bar bg-warning" role="progressbar" style={{width: "25%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="progress mb-3" style={{height: 30}}>
  <div class="progress-bar bg-danger" role="progressbar" style={{width: "50%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
```

## Also check

Refer to Bootstrap's documentation for more information.

- [Multiple bars][1]
- [Striped][2]
- [Animated stripes][3]

[1]: https://getbootstrap.com/docs/4.0/components/progress/#multiple-bars
[2]: https://getbootstrap.com/docs/4.0/components/progress/#striped
[3]: https://getbootstrap.com/docs/4.0/components/progress/#animated-stripes