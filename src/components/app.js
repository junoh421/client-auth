import React, { Component } from 'react';
import '../style/app.css';
import Header from './header'

export default class App extends Component {

  render() {
    return (
       <div className="App">
          <Header />
      </div>
    );
  }
}
