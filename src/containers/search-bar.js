import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''} ;

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event) {
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.selectUser(this.props.users[0]);
    this.setState( {term: ''} );
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
         placeholder="Search"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
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
