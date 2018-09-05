# Tabbable Panes

<p class="lead">Extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.</p>

Dynamic tabbed interfaces, require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes.

Note that dynamic tabbed interfaces should _not_ contain dropdown menus.

To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.show` to make the initial content visible.

<!-- STORY -->

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>

<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
```

Refer to [Bootstrap's documentation](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior) for more information.

<br/>

## Pointers instead tabs

Below is an example of the same component using the `.nav-pointers` class on the `.nav`, instead the default tabbed bar.


<div class="doc-preview mb-0">

  <ul class="nav nav-pointers mb-0 pl-0 nav-justified" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#quote-1" role="tab" aria-selected="true">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/businessinsider.png" alt="Business Insider"/>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#quote-2" role="tab" aria-selected="false">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/Swissport.png" alt="Swissport"/>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#quote-3" role="tab" aria-selected="false">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/coindesk.png" alt="Coindesk"/>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#quote-4" role="tab" aria-selected="false">
        <img src="https://windingtree.com/assets/img/in-the-press/quotes/skift.svg" alt="Skift"/>
      </a>
    </li>
  </ul>

  <div class="tab-content block-shadow px-2 py-3 bg-white">
    <div class="tab-pane fade show active" id="quote-1" role="tabpanel">
      <blockquote class="blockquote blockquote--alt text-center text-md-left">
        <footer class="blockquote-footer media flex-column flex-md-row align-items-center mb-1">
          <img class="mb-1 mb-md-0 mr-md-1 rounded-circle" src="https://windingtree.com/assets/img/in-the-press/quotes/avatars/lisa-farrar.jpg" width="60" height="60" alt="Lisa Farrar"/>
          <cite class="media-body">
            Lisa Farrar
            <br/>
            Chief digital officer at Nordic Choice Hotels
          </cite>
        </footer>
        <p class="d-flex flex-column align-items-center d-md-block">
          "It's very exciting, but very early. It's a simpler and cheaper distribution chain that can challenge the booking giants"
          <a href="http://nordic.businessinsider.com/a-norwegian-hotel-billionaire-wants-to-use-blockchain-to-cut-out-expedia--/" class="mt-1 mt-md-0 border-bottom">
            Read full article
          </a>
        </p>
      </blockquote>
    </div>
    <div class="tab-pane fade " id="quote-2" role="tabpanel">
      <blockquote class="blockquote blockquote--alt text-center text-md-left">
        <footer class="blockquote-footer media flex-column flex-md-row align-items-center mb-1">
          <img class="mb-1 mb-md-0 mr-md-1 rounded-circle" src="https://windingtree.com/assets/img/in-the-press/quotes/avatars/Christoph-Meier.jpg" width="60" height="60" alt="Christoph Meier"/>
          <cite class="media-body">
            Christoph Meier
            <br/>
            Corporate Communications
          </cite>
          </footer>
          <p class="d-flex flex-column align-items-center d-md-block">
            "Swissport and Winding Tree, a blockchain-based travel distribution platform, aim to jointly explore the potential of distributing Swissport’s existing travel services and new offers. Blockchain will allow any provider to tap into Swissport’s inventory through Winding Tree..."
            <a href="http://www.swissport.com/nc/news-media-center/news-detail/article/swissport-signs-letters-of-intent-with-two-blockchain-technology-start-ups/" class="mt-1 mt-md-0 border-bottom">
              Read full article
            </a>
          </p>
        </blockquote>
      </div>
      <div class="tab-pane fade " id="quote-3" role="tabpanel">
        <blockquote class="blockquote text-center text-md-left">
          <p class="d-flex flex-column align-items-center d-md-block">
            "Reinhard Lanegger, senior venture development manager at the Lufthansa Innovation Hub, told CoinDesk, that, specifically, Lufthansa is interested in exploring use cases that would put booking, rebooking and traveler itinerary information on a blockchain. In short, he said both Lufthansa and Winding Tree see the partnership as a win-win – one that allows Lufthansa exposure to new technology experts, and Winding Tree access to experts in the field...."&nbsp;
            <a href="https://www.coindesk.com/ready-takeoff-lufthansa-strikes-deal-blockchain-ico-startup/" class="mt-1 mt-md-0 border-bottom small">
            Read full article
          </a>
        </p>
      </blockquote>
    </div>
    <div class="tab-pane fade " id="quote-4" role="tabpanel">
      <blockquote class="blockquote text-center text-md-left">
        <p class="d-flex flex-column align-items-center d-md-block">
          "What Lufthansa’s new partnership does is show how airlines and hotels might use the technology in the future to drastically reduce distribution costs. And although Lufthansa joins Air France-KLM in exploring what blockchain can do, Lufthansa has gone the furthest among airlines through its new agreement with Switzerland-based start-up Winding Tree...."&nbsp;
          <a href="https://skift.com/2017/10/10/lufthansa-partners-with-a-blockchain-provider-in-an-investment-worth-testing/" class="mt-1 mt-md-0 border-bottom small">
            Read full article
          </a>
        </p>
      </blockquote>
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
  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#quote-3" role="tab" aria-selected="true">
      <img src="..." alt="Coindesk"/>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#quote-4" role="tab" aria-selected="true">
      <img src="..." alt="Skift"/>
    </a>
  </li>
</ul>

<!-- If the .tab-content component is placed immediately after the .nav there is no need to add the .block-shadow helper class -->
<div class="tab-content" id="quotes">
  <div class="tab-pane fade show active" id="quote-1" role="tabpanel" aria-labelledby="buisness-insider-tab">...</div>
  <div class="tab-pane fade" id="quote-2" role="tabpanel" aria-labelledby="swissport-tab">...</div>
  <div class="tab-pane fade" id="quote-3" role="tabpanel" aria-labelledby="coindesk-tab">...</div>
  <div class="tab-pane fade" id="quote-4" role="tabpanel" aria-labelledby="skift-tab">...</div>
</div>
```