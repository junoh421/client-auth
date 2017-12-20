import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
    if (!this.props.matchingUser) {
      return <div>Enter in a user to get started.</div>
    }

    return (
        <div> 
            <div>{this.props.user.first_name} {this.props.user.last_name}</div>
            <div>{this.props.user.username}</div>
            <div> Followers: {this.props.user.posts} </div>
            <div> Followers: {this.props.user.followers} </div>
            <div> Following: {this.props.user.following} </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.matchingUser
    };
}


export default connect(mapStateToProps) (UserDetail);
