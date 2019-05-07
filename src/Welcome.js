import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Title from './Title';

class Welcome extends Component {
    render(){
        return(
            <div className="welcome-page">
                <Title/>
                <div className="welcome-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                <NavLink to="/Home"><button className="welcome-button">Follow our journey...</button></NavLink>
            </div>
        );
    }
}

export default Welcome;