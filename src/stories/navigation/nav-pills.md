# Nav Pills

Take the basic nav and add the `.nav-pills` class to generate a tabbed interface.

Add dropdown menus with a little extra HTML and the dropdowns [JavaScript plugin](https://getbootstrap.com/docs/4.0/components/dropdowns/#usage).

<!-- STORY -->

```html
<ul class="nav nav-pills"> ... </ul>
  ...
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  ...
</ul>
```
