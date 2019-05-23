import React from 'react';
import Title from './Title';

const MobileHeader = props => {
    return (
        <div className="mobile-header">
            <Title/>
            <div className="map-instruction">
                <p>Select a marker on the map below to read about it...</p>
            </div>
        </div>
    );
}

export default MobileHeader;