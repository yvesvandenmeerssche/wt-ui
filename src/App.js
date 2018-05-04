import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Redirect, browserHistory} from 'react-router-dom';

// Libraries
import 'expose-loader?$!jquery';
import 'popper.js';
import 'bootstrap';

// Styles
import './css/app.scss';

// Layouts
import LayoutMain from './layouts/LayoutMain.js';
import LayoutError from './layouts/LayoutError.js';

// Views
import Main from './views/Main';
import Secondary from './views/Secondary';
import Error404 from './views/Error404';

export default class App extends Component {
  render () {
    function RouteWithLayout({layout, component}){
      return (
        <Route render={(props) =>
          React.createElement(layout, props, React.createElement(component, props))
        }/>
      );
    }
    return (
      <Router history={browserHistory}>
        <Switch>
          <RouteWithLayout layout={LayoutMain} exact path="/" component={Main} />
          <RouteWithLayout layout={LayoutMain} path='/Secondary' component={Secondary} />
          <RouteWithLayout layout={LayoutError} path='/404' component={Error404} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    )
  }
}
