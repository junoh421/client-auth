import React, { Component } from 'react';
import '../style/app.css';
import UserDetail from '../containers/user-detail';
import SearchBar from '../containers/search-bar';
import UserContents from '../containers/user-contents';
import Header from './header'

export default class App extends Component {

  render() {
    return (
       <div className="App">
          <Header />
          <SearchBar />
          <UserDetail />
          <UserContents />
      </div>
    );
  }
}
