import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // ES6


const SpinnerLayout = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    border: 1px solid black;
    width: 100%;
`;



export default class Spinner extends Component {


    render() {



        return (
            <SpinnerLayout></SpinnerLayout>
        );
    }
}

