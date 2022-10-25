import React, { Component } from 'react';
import LoginForm from './form/LoginForm';

export class Login extends Component {
  static displayName = Login.name;

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
