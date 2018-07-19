<h1>Navbar</h1>

<p class="lead">The navbar is a navigation header that includes support for branding, navigation, and more. It can also be collapsed on small viewports.</p>

Navbars come with built-in support for sub-components, as you can see below. Review [Bootstrap's documentation](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content) for more information.


<!-- STORY -->

```html

<nav className="navbar navbar-dark navbar-expand-lg" id="navbar">
  <div className="container">

    <!-- Brand -->
    <a href="/" className="navbar-brand d-block">Winding Tree</a>

    <!-- Menu toggler (mobile) -->
    <button className="navbar-toggler px-0 border-0" id="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
      <i className="mdi mdi-24px mdi-menu"></i>
    </button>

    <!-- Navbar menu -->
    <div className="collapse navbar-collapse" id="navbar-content">
      <ul className="navbar-nav ml-auto" id="navbar-nav">

        <!-- Normal item -->
        <li className="nav-item h5">
          <a href="/" className="nav-link">
          Normal item
          </a>
        </li>

        <!-- Dropdown -->
        <li className="nav-item h5 dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu">
            <a href="/" className="dropdown-item">
              Dropdown item
            </a>
          </div>
        </li>

        <!-- Action button -->
        <li className="nav-item">
          <a href="/" className="btn btn-block btn-primary" id="navbar-btn">
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
  // if (Modernizr.mq(MQ.up)) {
  if (window.matchMedia(MQ.up).matches) {
    navbarNav.setAttribute('style', 'transform: translateX(' + (navbarBtn.offsetWidth + 30) + 'px)');
  } else {
    navbarNav.removeAttribute('style');
  }

  setTimeout(function() {
    navbar.setAttribute('style', 'opacity: 1; visibility: visible;');
  }, 900); // .navbar-nav translateX transition duration * 2
}

function navbarToggle() {
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

navbarToggle();
navbarShow();

window.addEventListener('scroll', function() {
  navbarToggle();
});

window.addEventListener('optimizedResize', function() {
  // if (Modernizr.mq(MQ.up)) {
  if (window.matchMedia(MQ.up).matches) {
    navbar.setAttribute('style', 'opacity: 0; visibility: hidden;');
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
  console.log('aaa');
});

navbarToggler.addEventListener('touchend', function() {
  mobileMenu(this);
});

```