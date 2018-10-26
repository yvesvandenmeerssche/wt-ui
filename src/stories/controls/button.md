# Button

We included several predefined button styles, aligned with our brand image. Each style has a specific prourpose, and other styles should be avoided.

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

If the `.btn` class is applied to a link, which redirects to other pages or sections within the current page, add a `role="button"` to appropriately convey their purpose. Additionaly, `rel="noopener noreferrer"` should be added to links containing `target="_blank"` as a precaution against reverse tabnabbing. For more information, please refer to this [article](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/).

<!-- STORY -->

```html

<!-- Defaul styles -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn--accent">Accent</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn light">Light</button>
<button type="button" class="btn btn-link">Link</button>

<!-- Button tags -->
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">

```