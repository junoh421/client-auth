import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class SignUp extends Component {
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

  onSubmit(values) {

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
                label="Full Name"
                name="fullName"
                component={this.renderField}
              />
              <Field
                label="Username"
                name="username"
                component={this.renderField}
              />
              <Field
                label="Password"
                name="password"
                component={this.renderField}
              />
              <button type="submit" className="btn btn-primary">Sign up</button>
              <Link to="/signin">
                <button className="btn btn-success">
                  Log in
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

  if (!values.fullName) {
    errors.fullName = "Enter full name";
  }

  if (!values.username) {
    errors.username = "Enter username";
  }

  if (!values.password) {
    errors.password = "Enter password";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'SignUp'
}) (SignUp);
