# Footer

The `#app-footer` is intended to display complementary information on every page. It shoud be placed just below `#app-content` and be used only once per page.

Inside the footer you can use rows and columns to structure the layout acordingly to your needs.

Use the `.app-footer--stiky` modifier class to make sure the footer is allways at the bottom of the viewpoer, no matter how much content is displayed before.

Add the optional `.pulse-container` just before closing the `<footer>` to create an animated pulse effect.

<!-- STORY -->

```html
<footer id="app-footer" class="app-footer--stiky">
  <div class="container">
    <div class="row">
      <section class="col-12 col-md-6">
        <h4><strong>About Winding Tree</strong></h4>
        <p class="font--alt">Winding Tree is a blockchain-based decentralized <a href="https://github.com/windingtree/">open-source</a> travel distribution platform. We make travel cheaper for the end user, while making it more profitable for suppliers.</p>
        <p><a href="https://windingtree.com" class="btn btn-primary btn-sm mb-3">Visit our website</a></p>
      </section>
      <section class="col-12 col-md-6">
          <h4><strong>Winding Tree Limited</strong></h4>
        <p class="font--alt">Suite 23 Portland House, Glacis Road<br/>Gibraltar GX11 1AA</p>
        <ul class="list-unstyled font--alt">
          <li><i class="wicon-github-circled text-primary"></i> <a href="https://github.com/windingtree/">GitHub</a></li>
          <li><i class="wicon-twitter text-primary"></i> <a href="https://twitter.com/windingtree">Twitter</a></li>
          <li><i class="wicon-link text-primary"></i> <a href="http://demo.windingtree.com/">Demo App</a></li>
        </ul>
      </section>
    </div>
    <div class="row">
      <div class="col-12">
        <p class="mb-0 font--alt">© Winding Tree</p>
      </div>
    </div>
  </div>

  <!-- Optional pulse effect -->
  <div class="pulse-container">
    <div class="pulse-box">
      <svg class="pulse-svg" width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle first-circle" cx="25" cy="25" r="25"></circle>
        <circle class="circle second-circle" cx="25" cy="25" r="25"></circle>
        <circle class="circle third-circle" cx="25" cy="25" r="25"></circle>
        <circle class="circle" fill="none" cx="25" cy="25" r="25"></circle>
      </svg>
    </div>
  </div>

</footer>
```