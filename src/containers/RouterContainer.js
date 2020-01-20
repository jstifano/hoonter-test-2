import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomeContainer from './home/HomeContainer';

/**
* Componente donde se manejaran las rutas master-detail   
*/
class RouterContainer extends Component {

  render() {
    return (
      <Router>
        <Switch location={this.props.location}>
          <Route exact path="/" component={ HomeContainer }/>
        </Switch>
      </Router>
    )
  }
}

export default RouterContainer;