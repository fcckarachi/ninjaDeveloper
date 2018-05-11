import React, { Component } from 'react';
import {
  Route, Link
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'devicons/css/devicons.css';

import Navbar from './Navbar';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div >
      
        <Navbar />       

        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blogs} />
        <Route path="/contact" component={Contact} />

      </div>
    );
  }
}

export default App;
