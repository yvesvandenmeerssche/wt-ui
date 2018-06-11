import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'

// Readme files
import Table from './containers/table.md';
import Figure from './containers/figure.md';
import Card from './containers/card.md';
import Collapse from './containers/collapse.md';
import Jumbotron from './containers/jumbotron.md';
import Modal from './containers/modal.md';
import Carousel from './containers/carousel.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


storiesOf('Containers', module)

  // Table
  .add('Table', withCodePreview(Table, () =>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  ))

  // Figure
  .add('Figure', withCodePreview(Figure, () =>
    <figure class="figure">
      <img src="http://via.placeholder.com/300x200" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
      <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
  ))

  // Card
  .add('Card', withCodePreview(Card, () =>
    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  ))

  // Collapse
  .add('Collapse', withCodePreview(Collapse, () =>
    <div>
      <p>
        <a class="btn btn-primary mr-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  ))

  // Jumbotron
  .add('Jumbotron', withCodePreview(Jumbotron, () =>
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4"/>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  ))

  // Modal
  .add('Modal', withCodePreview(Modal, () =>
    <div>
    <div class="modal" tabindex="-1" role="dialog" style={{display: 'block', position: 'static'}}>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <hr/>

      <button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#exampleModal2">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModal2Label">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Modal body goes here
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

  // Carousel
  .add('Carousel', withCodePreview(Carousel, () =>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="http://via.placeholder.com/800x300" alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="http://via.placeholder.com/800x300" alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="http://via.placeholder.com/800x300" alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  ))
