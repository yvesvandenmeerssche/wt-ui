# Blockquote

Blockquotes are build baset on three CSS classes, `.blockqoute`, `.blockqoute-body` and `.blockqoute-footer`.

Optionally, add a `<footer class="blockquote-footer">` for identifying a source, and wrap the name of the source in a `<cite>`.

<!-- STORY -->

```html

<!-- Default Style -->
<blockquote class="blockquote">
  <p class="blockquote-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <footer class="blockquote-footer">

    <!-- User Component -->
      <div class="user">
        <svg class="user-img" xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120">
          <defs>
            <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path"></path>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <mask id="mask" fill="white">
              <use xlink-href="#path"></use>
            </mask>
            <image mask="url(#mask)" width="108" height="120" xlink-href="http://windingtree.com/assets/img/team/max.jpg"></image>
          </g>
        </svg>
        <div class="user-data">
          <p class="user-name">Maksim Izmaylov</p>
          <p class="user-role">Founder, CEO</p>
        </div>
      </div>

  </footer>
</blockquote>

<!-- Alternative Style -->
<blockquote class="blockquote blockquote-alt">
  <p class="blockquote-body">
    "It's very exciting, but very early. It's a simpler and cheaper distribution chain that can challenge the booking giants"
    <a href="http://nordic.businessinsider.com/a-norwegian-hotel-billionaire-wants-to-use-blockchain-to-cut-out-expedia--/">
      Read full article
    </a>
  </p>
  <cite class="blockquote-footer">
    <div class="user user-sm">
    <img class="user-img" src="http://windingtree.com/assets/img/in-the-press/quotes/avatars/lisa-farrar.jpg" width="60" height="60" alt="Lisa Farrar"/>
      <div class="user-data">
        <p class="user-name">Lisa Farrar</p>
        <p class="user-role">Chief digital officer at Nordic Choice Hotels</p>
      </div>
    </div>
  </cite>
</blockquote>
```