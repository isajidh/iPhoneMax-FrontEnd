import React, { Component } from 'react';
import SignUpForm from './form/SignUpForm';

export class SignUp extends Component {
    static displayName = SignUp.name;

    render() {
        return (
            <div>
                <SignUpForm />
            </div>
        );
    }
}
