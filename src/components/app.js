import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/app.css';
import UserDetail from '../containers/user-detail';
import SearchBar from '../containers/search-bar';

export default class App extends Component {

  render() {
    return (
       <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Instagram Mockup</h1>
          </header>
          <SearchBar />
          <UserDetail />
      </div>
    );
  }
}
