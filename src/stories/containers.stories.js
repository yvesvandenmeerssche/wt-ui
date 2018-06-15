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
    <table className="table">
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
    <figure className="figure">
      <img src="http://via.placeholder.com/300x200" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
      <figcaption className="figure-caption">A caption for the above image.</figcaption>
    </figure>
  ))

  // Card
  .add('Card', withCodePreview(Card, () =>
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  ))

  // Collapse
  .add('Collapse', withCodePreview(Collapse, () =>
    <div>
      <p>
        <a className="btn btn-primary mr-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  ))

  // Jumbotron
  .add('Jumbotron', withCodePreview(Jumbotron, () =>
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4"/>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  ))

  // Modal
  .add('Modal', withCodePreview(Modal, () =>
    <div>
    <div className="modal" tabIndex="-1" role="dialog" style={{display: 'block', position: 'static'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <hr/>

      <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#exampleModal2">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModal2Label">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Modal body goes here
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

  // Carousel
  .add('Carousel', withCodePreview(Carousel, () =>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="http://via.placeholder.com/800x300/9f09e0/ffffff" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="http://via.placeholder.com/800x300/1ac592/ffffff" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="http://via.placeholder.com/800x300/0b8fdf/ffffff" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  ))
