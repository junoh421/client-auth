import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input 
          onChange={event => this.props.selectUser(this.props.users[1]) }
        />
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchBar);
