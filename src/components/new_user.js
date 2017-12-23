import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class NewUser extends Component {
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
      <div> 
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
          <Link className="btn btn-success" to="/login">
            Log In 
          </Link>
        </form>
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
    errors.fullName = "Enter full nam";
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
  form: 'NewUser'
}) (NewUser);
