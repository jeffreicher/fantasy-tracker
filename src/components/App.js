import React, { Component } from 'react';
import Navbar from './navbar';
import GamesComponent from './gamesComponent';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <GamesComponent />
            </div>
        );
    };
};

export default App;