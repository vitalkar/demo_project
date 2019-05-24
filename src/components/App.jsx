import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // ES6

//
// import Home from './Home';
import Login from './Login';
import Slider from './Slider/Slider';
import Spinner from './Spinner/Spinner';

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #003366;
  color: #FFF;
`;

const StyledLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  padding: 0 1rem;
`;

const AppContainer = styled.div`
  margin: auto;
  height: 100%;
  width: 70%;
`;

const Footer = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #003366;
  color: #FFF;
`;

class App extends Component {
  render() {
    return (
      
      <Router>
        <Navbar>
          <StyledLink to={'/'}>App</StyledLink>
            <StyledLink to={'/login'}>Login</StyledLink>
          <StyledLink to={'/slider'}>Slider</StyledLink>
          <StyledLink to={'/spinner'}>Spinner</StyledLink>
        </Navbar>
        <div className="App" style={{height: '100%', width: '100%'}}>
          <AppContainer>
            <Route path='/' exact render={
              () => 
                <div style={{
                  textAlign: 'center',
                  fontSize: '2rem',
                  fontWeight: '600'
                }}>Demo App</div>
              } />
            <Route path='/login' component={Login} />
            <Route path='/slider' render={() => <Slider str={'string type'} num={'123'} obj={{type: 'object'}} />} />
            <Route path='/spinner' component={Spinner} />
          </AppContainer>
        </div>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
