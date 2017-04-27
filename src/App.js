import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import * as TextActions from './actions/TextActions';

class App extends Component {
  
  notifyResize(size) {
    TextActions.updateWidth(size);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
