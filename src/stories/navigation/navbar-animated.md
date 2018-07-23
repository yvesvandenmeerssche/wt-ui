<h1>Navbar (Animated)</h1>

<p class="lead">Create a `.navbar` version that changes it's background color on scroll.</p>

There are some differences between the default navbar and the animated version.

- You must add the `.navbar--toggle-bg` modifier to the `.navbar`.
- The `.navbar` alsso requires an inline style attribute, `style="opacity: 0"`.

Optionally, if you want to include a button that will enter from the right after the suer scrolls.

- Add the `.navbar-nav--animated-btn` modifier to the `.navbar-nav`.
- Add a `.navbar-item` at the end with the id `#navbar-btn`.

You'll also require javascript to make it work, as described below.

<!-- STORY -->

```html
<nav class="navbar navbar-dark navbar-expand-lg navbar--toggle-bg" id="navbar" style="opacity: 0">
  <div class="container">

    <!-- Brand -->
    <a href="/" class="navbar-brand d-block">Winding Tree</a>

    <!-- Menu toggler (mobile) -->
    <button class="navbar-toggler px-0 border-0" id="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
      <i class="mdi mdi-24px mdi-menu"></i>
    </button>

    <!-- Navbar menu -->
    <div class="collapse navbar-collapse" id="navbar-content">
      <ul class="navbar-nav ml-auto navbar-nav--animated-btn" id="navbar-nav">

        <!-- Normal item -->
        <li class="nav-item h5">
          <a href="/" class="nav-link">
          Normal item
          </a>
        </li>

        <!-- Dropdown -->
        <li class="nav-item h5 dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu">
            <a href="/" class="dropdown-item">
              Dropdown item
            </a>
          </div>
        </li>

        <!-- Action button (requiered if the .navbar-nav--animated-btn is used) -->
        <li class="nav-item">
          <a href="/" class="btn btn-block btn-primary" id="navbar-btn">
            Join Platform
          </a>
        </li>

      </ul>
    </div>

  </div>
</nav>

```


### Required JavasSript

In order to properly work, the `.navbar` requires the following JavaScript code.

```js

// Optimized resize
// https://developer.mozilla.org/ru/docs/Web/Events/resize
(function () {
  const throttle = function (type, name, obj) {
    obj = obj || window;
    let running = false;
    const func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle('resize', 'optimizedResize');
})();

const navbar = document.getElementById('navbar');
const navbarNav = document.getElementById('navbar-nav');
const navbarToggler = document.getElementById('navbar-toggler');
const navbarBtn = document.getElementById('navbar-btn');

const MQ = {
  down: '(max-width: 991.98px)',
  up: '(min-width: 992px)'
};

function navbarShow() {
  if (typeof(navbarBtn) != 'undefined' && navbarBtn != null) {
    if (navbarNav.classList.contains("navbar-nav--animated-btn")) {
      if (window.matchMedia(MQ.up).matches) {
        navbarNav.setAttribute('style', 'transform: translateX(' + (navbarBtn.offsetWidth + 30) + 'px)');
      } else {
        navbarNav.removeAttribute('style');
      }
    }

    setTimeout(function() {
      navbar.setAttribute('style', 'opacity: 1; visibility: visible;');
    }, 900); // .navbar-nav translateX transition duration * 2
  }
}

function navbarToggle() {
  if (navbar.classList.contains("navbar--toggle-bg")) {
    if (navbarToggler.getAttribute('aria-expanded') === 'false') {
      if (window.pageYOffset > navbar.offsetHeight) {
        navbar.classList.add('navbar-light');
        navbar.classList.add('bg-white');
        navbar.classList.remove('navbar-dark');
      } else {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
        navbar.classList.remove('bg-white');
      }
    }
  }
}

navbarToggle();
navbarShow();

window.addEventListener('scroll', function() {
  navbarToggle();
});

window.addEventListener('optimizedResize', function() {
  // if (Modernizr.mq(MQ.up)) {
  if (window.matchMedia(MQ.up).matches) {
    if (typeof(navbarBtn) != 'undefined' && navbarBtn != null) {
      navbar.setAttribute('style', 'opacity: 0; visibility: hidden;');
    }
  }
  navbarShow();
});

function mobileMenu(toggleButton) {

  const icon = toggleButton.querySelector('.mdi');

  if (toggleButton.getAttribute('aria-expanded') === 'false') {
    navbar.classList.add('navbar-light', 'bg-white');
    navbar.classList.remove('navbar-dark');

    icon.classList.remove('mdi-menu');
    icon.classList.add('mdi-close');
  } else {
    setTimeout(function() {
      if (document.documentElement.scrollTop <= navbar.offsetHeight) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light', 'bg-white');
      }

      icon.classList.remove('mdi-close');
      icon.classList.add('mdi-menu');
    }, 250); // Bootstrap $transition-collapse transition duration .35s - (substract) .1s
  }
}

$('[data-toggle="dropdown"]').dropdown();
$("#navbar-toggler").on('click', function(){
  mobileMenu(this);
  $("#navbar-content").collapse('toggle');
});

navbarToggler.addEventListener('touchend', function() {
  mobileMenu(this);
});

```