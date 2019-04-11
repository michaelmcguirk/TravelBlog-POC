import React from 'react';

const ContentComponent = ({place}) => 
    <div>
        <h1>{place.title}</h1>
        <h2>{place.location.address}</h2>
        <div><p>{place.content}</p></div>
    </div>

export default ContentComponent;


