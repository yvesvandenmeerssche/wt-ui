# Partners Block

The `.partners-block` is a specific type of carousel used to display the Windidng Tree partners.

The carousel is based on Slick, please reffer to [its website](http://kenwheeler.github.io/slick/) to see the documentation.

<!-- STORY -->

```html
  <div class="partners-block js-partners-block">
    <h4 class="partners-block-title">Already joined us</h4>
    <img class="partners-block-img" src="partner.img" alt="..."/>
    ...
  </div>

  <div class="partners-block js-partners-block">
    <h4 class="partners-block-title">Already joined us</h4>
    <img class="partners-block-img" src="partner.img" alt="..."/>
    ...
  </div>

  <div class="partners-block js-partners-block">
    <h4 class="partners-block-title">Tech partners</h4>
    <img class="partners-block-img" src="partner.img" alt="..."/>
    ...
  </div>
</div>

<script type="text/javascript">
  window.addEventListener('load', function() {
    $('.js-partners-block').each(function(index) {
      let slickOptions = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        draggable: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        speed: 10000,
        touchMove: false,
        variableWidth: true
      };

      if (isEven(index + 1)) {
        $.extend(slickOptions, {
          rtl: true
        });
      }

      $(this).slick(slickOptions);
    });
  });
</script>

```