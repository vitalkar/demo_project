import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // ES6



export default class Login extends Component {

    onSubmit = () => {
        console.log('submit');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                name: 
                <input type="text"/>
                password:
                <input type="text"/>
            </form>
        );
    }
}

