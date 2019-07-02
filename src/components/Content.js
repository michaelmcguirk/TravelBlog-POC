import React from 'react';

const Content = ({place}) => 
    <div id="content">
        <div className="content-header">
            <h1 className="post-title">{place.title}</h1>
            <p className="post-data"> {getPostSubtitle(place)} </p>
            <br></br>
        </div>
        <div dangerouslySetInnerHTML={{__html: place.content}}/>
    </div>

const getPostSubtitle = (place) => {
    if(!place.published || !place.location.address){return}
    return place.published + "|" + place.location.address
}
export default Content;


