import React, { Component } from 'react';

export default class AppFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'footer'
    };
  }

  render() {
    const {loadItems} = this.props;

    return (
      <footer class="footer bg--purple text-white">
        <div class="container">

          <div class="pt-2 pb-1">

            <div class="row">

              <div class="col-md-4">
                <img src="https://windingtree.com/assets/img/logo/sm-white.svg" alt="Winding Tree" class="d-md-none mb-2"/>
                <img src="https://windingtree.com/assets/img/logo/md-white.svg" height="60" alt="Winding Tree" class="d-none d-md-inline"/>
              </div>

              <div class="col-md-8">
                <div class="row">

                  <div class="col-6 col-md-3">
                    <dl class="mb-1">
                      <dt class="mb-1">Solutions</dt>
                      <dd>
                        <nav class="nav flex-column small">
                          <a href="/suppliers.html" class="nav-link px-0 text-white text--alpha-inverse">For travel suppliers</a>
                          <a href="/sellers.html" class="nav-link px-0 text-white text--alpha-inverse">For sellers of travel</a>
                          <a href="/software-vendors.html" class="nav-link px-0 text-white text--alpha-inverse">For software vendors</a>
                          <a href="https://github.com/windingtree/" class="nav-link px-0 text-white text--alpha-inverse">API</a>
                        </nav>
                      </dd>
                    </dl>
                  </div>

                  <div class="col-6 col-md-3">
                    <dl class="mb-1">
                      <dt class="mb-1">Lif Token</dt>
                      <dd>
                        <nav class="nav flex-column small">
                          <a href="/lif-token.html" class="nav-link px-0 text-white text--alpha-inverse">About token</a>
                          <a href="/lif-token.html" class="nav-link px-0 text-white text--alpha-inverse">Buy Lifs</a>
                          <a href="/lif-token.html" class="nav-link px-0 text-white text--alpha-inverse">Smart contract</a>
                        </nav>
                      </dd>
                    </dl>
                  </div>

                  <div class="col-6 col-md-3">
                    <dl class="mb-1">
                    <dt class="mb-1">About</dt>
                      <dd>
                        <nav class="nav flex-column small">
                          <a href="/foundation.html" class="nav-link px-0 text-white text--alpha-inverse">Foundation</a>
                          <a href="https://blog.windingtree.com/" class="nav-link px-0 text-white text--alpha-inverse">Blog</a>
                          <a href="/foundation.html#roadmap" class="nav-link px-0 text-white text--alpha-inverse">Roadmap</a>
                          <a href="/foundation.html#team" class="nav-link px-0 text-white text--alpha-inverse">Team</a>
                          <a href="/assets/files/White_Paper_EN.pdf" class="nav-link px-0 text-white text--alpha-inverse">Read the White paper</a>
                        </nav>
                      </dd>
                    </dl>
                  </div>

                  <div class="col-6 col-md-3">
                    <dl class="mb-1">
                    <dt class="mb-1">Contacts</dt>
                      <dd>
                        <nav class="nav flex-column small">
                          <span class="nav-link px-0">
                            Gubelstrasse 11, 6300 Zug, Switzerland
                          </span>
                          <a href="mailto:info@windingtree.com" class="nav-link px-0 text-white text--alpha-inverse text-truncate">info@windingtree.com</a>
                        </nav>
                      </dd>
                    </dl>
                  </div>

                  <div class="col-6 col-md-3">
                    <dl class="mb-1">
                      <dt class="mb-1">Community</dt>
                      <dd>
                        <nav class="nav flex-column small">
                          <a href="/startups-and-developers.html" class="nav-link px-0 text-white text--alpha-inverse">For developers &amp;&nbsp;startups</a>
                        </nav>
                      </dd>
                    </dl>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <hr class="text--alpha"/>

          <div class="py-1">
            <div class="d-flex flex-column-reverse flex-md-row align-items-center">
              <div class="d-flex flex-column flex-md-row align-items-center align-items-md-baseline">
                <small>©&nbsp;2017–<script>document.write(new Date().getFullYear());</script>2018, Winding Tree</small>
                <a href="https://windingtree.com/" target="_blank" class="ml-md-2 small text-white text--alpha-inverse border-bottom">powered by Winding Tree</a>
              </div>

              <div class="mb-1 mb-md-0 ml-md-auto">
                <ul class="social list-inline text-center text-md-right">

                  <li class="list-inline-item">
                    <a href="https://github.com/windingtree" title="GitHub" className="text-white text--alpha">
                      <i class="mdi mdi-24px mdi-github-circle"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="https://twitter.com/windingtree" title="Twitter" className="text-white text--alpha">
                      <i class="mdi mdi-24px mdi-twitter"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="http://blog.windingtree.com/" title="Medium" className="text-white text--alpha">
                      <i class="mdi mdi-24px mdi-medium"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="https://www.youtube.com/channel/UCFuemEOhCfenYMoNdjD0Aew" title="YouTube" className="text-white text--alpha">
                      <i class="mdi mdi-24px mdi-youtube"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="https://t.me/windingtree" title="Telegram" className="text-white text--alpha">
                      <i class="mdi mdi-24px mdi-telegram"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="https://reddit.com/r/windingtree" title="Reddit" className="text-white text--alpha">
                      <i class="mdi mdi-24px mdi-reddit"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="https://bitcointalk.org/index.php?topic=1946065" title="BitcoinTalk" className="text-white text--alpha">
                      <i class="mdi mdi-24px mdi-bitcoin"></i>
                    </a>
                  </li>

                </ul>


              </div>

            </div>
          </div>
        </div>
      </footer>
    );
  }
}
