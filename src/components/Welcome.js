import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Title from './Title';

class Welcome extends Component {
    render(){
        return(
            <div className="welcome-page">
                <Title/>
                <div className="welcome-text"><p>In January 2019 we set off on a 6 month trip, exploring Latin America, 
                    starting in Brazil and working our way around and up into Mexico. From the beautiful desolation of 
                    Patagonia to the bustling streets of Mexico City, via the intoxicating heights of the Andes, 
                    this has been a life changing experience.</p>
                </div>
                <NavLink to="/Home"><button className="welcome-button">Follow our journey...</button></NavLink>
            </div>
        );
    }
}

export default Welcome;