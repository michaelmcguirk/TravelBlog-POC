import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const scrollToMap = () => {
    const mapElement = document.getElementById('map-section')
    if(window.matchMedia("only screen and (max-width: 768px)").matches){
        mapElement.scrollIntoView(true);
    }
}

export default () => (
    <div className="map-icon">
        <FontAwesomeIcon icon={faMapMarkerAlt} onClick={scrollToMap}/>
    </div>
)