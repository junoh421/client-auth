import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class LoginUser extends Component {
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
            label="Phone Number, username, or email"
            name="contactInformation"
            component={this.renderField}
          />          
          <Field
            label="Password"
            name="password"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary center-block">Sign in</button>
          <Link to="/users/new">
            <button className="btn btn-success center-block">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    )   
  }
}

function validate(values) {
  const errors = {}

  if (!values.contactInformation) {
    errors.contactInformation = "Enter contact information";
  }

  if (!values.password) {
    errors.password = "Enter password";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'LoginUser'
}) (LoginUser);
