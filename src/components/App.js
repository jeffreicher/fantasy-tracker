import React, { Component } from 'react';
import Navbar from './navbar';
import GamesContainer from './gamesContainer';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <GamesContainer />
            </div>
        );
    };
};

export default App;