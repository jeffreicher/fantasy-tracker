import React, {  Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href="#">Fantasy Tracker</a>
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="">Scoreboard</a>
                    <a className="nav-item nav-link"href="">Standings</a>                    
                </div>
            </nav>
        );
    };
};

export default Navbar;