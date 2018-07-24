import React, { Component } from 'react';
import Navbar from './navbar';
import Score from '../container/scoreContainer';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Score />
            </div>
        );
    };
};

export default App;