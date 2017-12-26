import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class SignIn extends Component {
  renderField(field) {
    const { meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''} 
        </div>
      </div>
    )
  }

  onSubmit({email, password}) {
    this.props.signInUser({ email, password}, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label="Email"
                name="email"
                component={this.renderField}
              />          
              <Field
                label="Password"
                name="password"
                component={this.renderField}
              />
              <button type="submit" className="btn btn-primary">Sign in</button>
              <Link to="/signup">
                <button className="btn btn-success">
                  Sign up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )   
  }
}

function validate(values) {
  const errors = {}

  if (!values.email) {
    errors.email = "Enter email";
  }

  if (!values.password) {
    errors.password = "Enter password";
  }

  return errors;
}


export default reduxForm(
  {
    validate,
    form: 'SignIn'
  }) (
    connect(null, actions) (SignIn)
  );
