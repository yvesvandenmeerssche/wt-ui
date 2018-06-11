# Collapse

<p class="lead">Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>

## Example

Click the buttons below to show and hide another element via class changes:

* `.collapse` hides content
* `.collapsing` is applied during transitions
* `.collapse.show` shows content

You can use a link with the `href` attribute, or a button with the `data-target` attribute. In both cases, the `data-toggle="collapse"` is required.


<!-- STORY -->

```html
    <div>
      <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
```

## Also check

Refer to Bootstrap's documentation for more information.

* [Multiple targets][0]
* [Accordion example][1]
* [Accessibility][2]
* [Usage][3]
  * [Via data attributes][4]
  * [Via JavaScript][5]
  * [Options][6]
  * [Methods][7]
  * [Events][8]

[0]: #multiple-targets
[1]: #accordion-example
[2]: #accessibility
[3]: #usage
[4]: #via-data-attributes
[5]: #via-javascript
[6]: #options
[7]: #methods
[8]: #events

