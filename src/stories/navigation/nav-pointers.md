# Nav Pointers

Take the basic nav and add the `.nav-pointers` class to generate an alternative tabbed interface.

Complement it with column classes on the nav-items, to give the images proportional sizes.

On small viewports the items will reduce their size until a certain point, after which an horizontal scroll will be activated.

_**Note:** If the content for the tabs is not immediately after the `.nav`, it must have the `.block-shadow` helper class to make the pointer visible. The shadow displayed in the following example is not part of the component._

<!-- STORY -->

```html
<ul className="nav nav-pointers" role="tablist">

  <li className="nav-item col-4 col-md-3">
    <a className="nav-link active" data-toggle="tab" href="#quote-1" role="tab" aria-selected="true">
      <img src="..." alt="Business Insider"/>
    </a>
  </li>

  <li className="nav-item col-4 col-md-3">
    <a className="nav-link" data-toggle="tab" href="#quote-2" role="tab" aria-selected="true">
      <img src="..." alt="Swissport"/>
    </a>
  </li>

  ...

</ul>
```

<br/>

### Fluid variant

Add the `.nav-justified` class to make the images on the menu to adjust to the available horizontal space. You won't need the column classes in this case.


<div class="doc-preview mb-0">

  <ul class="nav nav-pointers mb-0 pl-0 nav-justified" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#demo-1" role="tab" aria-selected="true">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/businessinsider.png" alt="Business Insider"/>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#demo-2" role="tab" aria-selected="false">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/Swissport.png" alt="Swissport"/>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#demo-3" role="tab" aria-selected="false">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/coindesk.png" alt="Coindesk"/>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#demo-4" role="tab" aria-selected="false">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/skift.svg" alt="Skift"/>
      </a>
    </li>
  </ul>

  <div style="
    margin-top: -45px;
    padding-top: 45px;
    height: 15px;
    margin-bottom: -30px;
   ">
    <div class="tab-content block-shadow px-2 py-3 bg-white">
      <div class="tab-pane fade show active" id="demo-1" role="tabpanel"></div>
      <div class="tab-pane fade " id="demo-2" role="tabpanel"></div>
      <div class="tab-pane fade " id="demo-3" role="tabpanel"></div>
      <div class="tab-pane fade " id="demo-4" role="tabpanel"></div>
    </div>
  </div>


</div>

```html
<ul className="nav nav-pointers nav-justified" role="tablist">

  <li className="nav-item">
    <a className="nav-link active" data-toggle="tab" href="#quote-1" role="tab" aria-selected="true">
      <img src="..." alt="Business Insider"/>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#quote-2" role="tab" aria-selected="true">
      <img src="..." alt="Swissport"/>
    </a>
  </li>

  ...

</ul>
```