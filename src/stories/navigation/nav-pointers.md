# Nav Pointers

Add the `.nav-pointers` class to the nav to generate an alternative tabbed interface.

Complement it with column classes on the `.nav-items`, to give the images proportional sizes.

_**Note:** If the content for the tabs is not immediately after the `.nav`, it must have the `.block-shadow` helper class to make the pointer visible. The shadow displayed in the following example is not part of the component._

<!-- STORY -->

```html
<ul className="nav nav-pointers" role="tablist">

  <li className="nav-item col-6 col-md-2">
    <a className="nav-link active" data-toggle="tab" href="#quote-1" role="tab" aria-selected="true">
      <img src="..." alt="Business Insider"/>
    </a>
  </li>

  <li className="nav-item col-6 col-md-2">
    <a className="nav-link" data-toggle="tab" href="#quote-2" role="tab" aria-selected="true">
      <img src="..." alt="Swissport"/>
    </a>
  </li>

  ...

</ul>
```
