import React, {Component} from 'react';
import Prod from './Prod';
import { BrowserRouter as Router, NavLink,Route } from "react-router-dom";
import About from './About';

class React3 extends Component {
  render() {
    return (
      <Router>
          <div>
            <NavLink to="/" exact activeStyle={
              {color:'red'}
            }>About</NavLink>&emsp;
            <NavLink to="/products" exact activeStyle={
              {color:'red'}
            }>Products</NavLink>
          </div>
          <Route path="/" exact component={About}/>
          <Route path="/products" component={Prod}/>
      </Router>
    );
  }
}

export default React3;