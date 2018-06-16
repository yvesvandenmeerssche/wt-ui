import React from 'react';

import { storiesOf } from '@storybook/react';
import 'bootstrap'

// Included addons
import { doc } from 'storybook-readme';

// Included components
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'

// Readme files
import BaseNav from './navigation/base-nav.md';
import NavTabs from './navigation/nav-tabs.md';
import NavPills from './navigation/nav-pills.md';
import Navbar from './navigation/navbar.md';
import Breadcrumb from './navigation/breadcrumb.md';
import Dropdown from './navigation/dropdown.md';
import Pagination from './navigation/pagination.md';
import Scrollspy from './navigation/scrollspy.md';
import {withDropdown, withScrollSpy} from "./HOCs/bootstrap";


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


storiesOf('Navigation', module)

  // Base Nav
  .add('Base nav', withCodePreview(BaseNav, () =>
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  ))

  // Nav Tabs
  .add('Nav Tabs', withCodePreview(NavTabs, () =>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  ))


  // Nav Pills
  .add('Nav Pills', withCodePreview(NavPills, () =>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  ))


  // Navbar
  .add('Navbar', withCodePreview(Navbar, withDropdown(() =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )))
  // Breadcrumb
  .add('Breadcrumb', withCodePreview(Breadcrumb, () =>
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    </div>
  ))
  // Dropdown
  .add('Dropdown', withCodePreview(Dropdown, () =>
    <div>
      {/* Single button dropdown */}
      <div className="d-inline-block mr-2 mb-2">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      {/* Split danger button */}
      <div className="d-inline-block">
        <div className="btn-group">
          <button type="button" className="btn btn-danger">Action</button>
          <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    </div>
  ))
  // Pagination
  .add('Pagination', withCodePreview(Pagination, () =>
    <div>
      <nav aria-label="Pagination Example">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

      <hr/>

      <nav aria-label="Pagination Example Small">
        <ul className="pagination pagination-sm justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

      <hr/>

      <nav aria-label="Pagination Example Large">
        <ul className="pagination pagination-lg justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  ))
  // Scrollspy
  .add('Scrollspy', withCodePreview(Scrollspy, withScrollSpy(() =>
    <div className="row">
      <div className="col-3">
      <div id="list-example" className="list-group">
        <a className="list-group-item list-group-item-action" href="#list-item-1" style={{pointerEvents: 'none'}}>Item 1</a>
        <a className="list-group-item list-group-item-action" href="#list-item-2" style={{pointerEvents: 'none'}}>Item2</a>
        <a className="list-group-item list-group-item-action" href="#list-item-3" style={{pointerEvents: 'none'}}>Item 3</a>
        <a className="list-group-item list-group-item-action" href="#list-item-4" style={{pointerEvents: 'none'}}>Item 4</a>
      </div>
      </div>

      <div className="col-9">
      <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example" style={{height: 190, overflowY: 'scroll'}}>
        <h4 id="list-item-1">Item 1</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <h4 id="list-item-2">Item 2</h4>
        <p>Magni optio doloremque nulla corporis id reprehenderit.</p>
        <h4 id="list-item-3">Item 3</h4>
        <p>Repellat tempora, vel dolorem temporibus praesentium sequi ipsa aperiam quod.</p>
        <h4 id="list-item-4">Item 4</h4>
        <p style={{marginBottom: 130}}>Officiis id quis aspernatur beatae.</p>
      </div>
      </div>
    </div>
  )))
