import React from 'react';

const Content = ({place}) => 
    <div>
        <div className="content-header">
            <h1 className="post-title">{place.title}</h1>
            <p className="post-data">{place.published} | {place.location.address}</p>
            <br></br>
        </div>
        <div><p>{place.content}</p></div>
    </div>
    
export default Content;


