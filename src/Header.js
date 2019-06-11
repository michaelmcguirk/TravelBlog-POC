import React from 'react';
import Title from './Title';

const Header = props => {
    return(
        <div className="header">
            <div className="desktop-title">
                <Title/>
            </div>
        </div>
    )
}

export default Header;