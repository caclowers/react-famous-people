import React, { Component } from 'react';
import logo from './Brasmon_Kee (1).png';

class Header extends Component {


    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo1" alt="logo" />
                <img src={logo} className="App-logo2" alt="logo" />
                <br />
                <br />
                <h1 className="App-title">FAMOUS PEOPLE</h1>
            </header>
        );
    };
};





export default Header;