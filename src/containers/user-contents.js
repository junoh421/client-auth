import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserContents extends Component {
  componentWillMount() {
    this.props.fetchUserContents();
  }

  renderUserContents(user_content) {
    return (
      <div className="card card-block" key={user_content.id}>
      	<span>
          <h4 className="card-title">{user_content.likes}</h4>
          <h4 className="card-title">{user_content.posts}</h4>
        </span>
      </div>
    )
  }

  render() {
    return (
      <div className="user-contents-list">
        {this.props.userContents.map(this.renderUserContents)}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { userContents: state.userContents}
}


export default connect(mapStateToProps, actions)(UserContents);
