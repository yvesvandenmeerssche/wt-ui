<h1>Navbar</h1>

<p class="lead">The navbar is a navigation header that includes support for branding, navigation, and more. It can also be collapsed on or expanded depending on the viewport size, by changing the size part on the `.navbar-expand-xl` class.</p>

Navbars come with built-in support for sub-components, as you can see below. Review [Bootstrap's documentation](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content) for more information.

One difference with the default Bootstrap's `.navbar` is the toggle button, for which we are using a material design icon.

<!-- STORY -->

```html

<nav class="navbar navbar-expand-xl navbar-light" id="navbar">
  <div class="container">
    <a class="navbar-brand mr-2" href="#">Navbar</a>

    <!-- Toggle button -->
    <button class="navbar-toggler px-0 border-0" id="navbar-toggler" type="button" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
      <i class="mdi mdi-24px mdi-menu"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbar-content">
      <ul class="navbar-nav mr-auto" id="navbar-nav">

        <!-- Normal (active) item -->
        <li class="nav-item active">
          <a class="nav-link h5" href="#">Home <span class="sr-only">(current)</span></a>
        </li>

        <!-- Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link h5 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>

        <!-- Disabled item -->
        <li class="nav-item">
          <a class="nav-link h5 disabled" href="#">Disabled</a>
        </li>

      </ul>

      <!-- Action form -->
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control form-control-lg mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-lg btn-success my-2 my-sm-0" type="submit">Search</button>
      </form>

    </div>
  </div>
</nav>

```
